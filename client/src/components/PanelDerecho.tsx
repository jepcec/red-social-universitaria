const PanelDerecho = () => {
  return (
    <div className="flex flex-col gap-5 w-full text-sm text-[#0d141c] font-normal overflow-y-auto p-1">
      
      {/* Sección: Publicaciones destacadas */}
      <section className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-base font-semibold mb-2">📌 Publicaciones destacadas</h2>
        <ul className="space-y-1 list-disc list-inside text-sm">
          <li className="hover:underline cursor-pointer">Convocatoria práctica en Red UTEC</li>
          <li className="hover:underline cursor-pointer">Nuevo repositorio de exámenes</li>
          <li className="hover:underline cursor-pointer">Concurso de innovación 2025</li>
        </ul>
      </section>

      {/* Sección: Usuarios sugeridos */}
      <section className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-base font-semibold mb-2">👥 Sugerencias para seguir</h2>
        <ul className="space-y-1">
          <li>@joseLuis <span className="text-gray-500 text-xs">(Sistemas)</span></li>
          <li>@mariaZapata <span className="text-gray-500 text-xs">(Derecho)</span></li>
          <li>@walterGomez <span className="text-gray-500 text-xs">(Docente)</span></li>
        </ul>
      </section>

      {/* Sección: Eventos */}
      <section className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-base font-semibold mb-2">📅 Eventos próximos</h2>
        <ul className="space-y-1">
          <li>🗓️ <strong>Taller de Python</strong> – 28 junio</li>
          <li>🗓️ <strong>Expo Proyectos Finales</strong> – 2 julio</li>
        </ul>
      </section>

      {/* Sección: Enlaces UNSAAC */}
      <section className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-base font-semibold mb-2">🔗 Enlaces útiles UNSAAC</h2>
        <ul className="space-y-2">
          <li><a href="http://ccomputo.unsaac.edu.pe/" target="_blank" className="text-blue-600 hover:underline">Centro de Cómputo</a></li>
          <li><a href="https://idiomas.unsaac.edu.pe/" target="_blank" className="text-blue-600 hover:underline">Centro de Idiomas</a></li>
          <li><a href="http://bienestar.unsaac.edu.pe/" target="_blank" className="text-blue-600 hover:underline">Bienestar Universitario (Comedor)</a></li>
        </ul>
      </section>

      {/* Sección: Estado del clima */}
      <section className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-base font-semibold mb-2">🌤️ Clima en Cusco</h2>
        <div className="space-y-1 text-sm">
          <p>Temperatura: <strong>16°C</strong></p>
          <p>Condición: <strong>Parcialmente nublado</strong></p>
          <p>Humedad: 65%</p>
          <p>Viento: 10 km/h</p>
        </div>
        <p className="text-gray-400 text-xs mt-2">* Info simulada. Puedes conectar una API como OpenWeatherMap.</p>
      </section>
    </div>
  );
};

export default PanelDerecho;
