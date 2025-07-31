const Dashboard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">
            Protected Route Beispiel
          </h2>
          <p className="mb-3">
            Dieses Dashboard ist ein Beispiel für eine geschützte Route, auf die
            nur authentifizierte Benutzer zugreifen können.
          </p>
          <p className="mb-3">
            Wenn versuchen wird, auf diese Seite zuzugreifen, ohne angemeldet zu
            sein, wird man automatisch auf die Anmeldeseite weitergeleitet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
