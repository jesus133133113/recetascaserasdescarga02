(function() {
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const params = new URLSearchParams(location.search);
  const override = params.get("allow") === "1";

  const dl = document.getElementById('dl');
  const ua = document.getElementById('ua');
  const msg = document.getElementById('msg');
  const sizeEl = document.getElementById('size');
  const dateEl = document.getElementById('date');

  // ⚠ Aquí pon los datos reales de tu APK (rellenar manualmente)
  const META = {
    size_readable: "15.2 MB",
    modified_iso: "2025-08-24T12:34:56+00:00"
  };

  sizeEl.textContent = META.size_readable;
  dateEl.textContent = META.modified_iso.split("T")[0];

  if (isAndroid || override) {
    ua.textContent = "Android detectado";
    dl.classList.remove('hidden');
  } else {
    ua.textContent = isMobile ? "Móvil no Android" : "Escritorio";
    msg.innerHTML = '<p><strong>Abre esta página en tu celular Android</strong> para descargar el APK.<br>Para probar en PC añade <code>?allow=1</code> a la URL.</p>';
  }
})();