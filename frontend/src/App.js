import { useEffect, useState } from 'react';
import InfoCard from './components/InfoCard';
import Chart from './components/Chart';
import Table from './components/Table';

function App() {
  const [dashboardConfig, setDashboardConfig] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/dashboard')
      .then((response) => response.json())
      .then((data) => setDashboardConfig(data));
  }, []);

  const renderWidget = (widget) => {
    switch (widget.type) {
      case 'infoCard':
        return <InfoCard key={widget.title} {...widget} />;
      case 'chart':
        return <Chart key={widget.title} {...widget} />;
      case 'table':
        return <Table key={widget.title} {...widget} />;
      default:
        return null;
    }
  };

  return (
    <>
      {dashboardConfig ? (
        <div className='max-w-5xl m-auto'>
          <h1 className='text-4xl m-auto mb-2 p-2'>{dashboardConfig?.title}</h1>
          <div className='widgets'>
            {dashboardConfig?.widgets.map(renderWidget)}
          </div>
        </div>
      ) : (
        'Loading...'
      )}
    </>
  );
}

export default App;
