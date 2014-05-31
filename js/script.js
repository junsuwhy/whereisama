$().ready(function() {
  var map = L.map('map').setView([23.574 / 121.479], 8);
  mapLink =
    '<a href="http://openstreetmap.org">OpenStreetMap</a>';
  L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; ' + mapLink,
      maxZoom: 18,
    }).addTo(map);

  Tabletop.init({
    key: '1r8geMv62QiLS3rZFVSjn_q-nt_tfOqIxFmJOUP_OiH0',
    callback: afterLoadSheet,
    simpleSheet: false
  });

  function afterLoadSheet(data, tabletop) {
    console.log(data);
    var marker = L.marker([25.0180, 121.4680], {
      draggable: true
    }).addTo(map)
      .bindPopup("<b>Te Papa</b><br>Museum of New Zealand.");
  }
});