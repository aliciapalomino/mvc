ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32718").setExtent([254667.911285, 8646618.719909, 326830.915105, 8697889.170218]);
var wms_layers = [];


        var lyr_ESRI_0 = new ol.layer.Tile({
            'title': 'ESRI',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DISTRITOS_1 = new ol.format.GeoJSON();
var features_DISTRITOS_1 = format_DISTRITOS_1.readFeatures(json_DISTRITOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_DISTRITOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DISTRITOS_1.addFeatures(features_DISTRITOS_1);
var lyr_DISTRITOS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DISTRITOS_1, 
                style: style_DISTRITOS_1,
                interactive: true,
                title: '<img src="styles/legend/DISTRITOS_1.png" /> DISTRITOS'
            });
var format_SEMANA_23_CARGA_VIRAL_2 = new ol.format.GeoJSON();
var features_SEMANA_23_CARGA_VIRAL_2 = format_SEMANA_23_CARGA_VIRAL_2.readFeatures(json_SEMANA_23_CARGA_VIRAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_SEMANA_23_CARGA_VIRAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEMANA_23_CARGA_VIRAL_2.addFeatures(features_SEMANA_23_CARGA_VIRAL_2);
var lyr_SEMANA_23_CARGA_VIRAL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEMANA_23_CARGA_VIRAL_2, 
                style: style_SEMANA_23_CARGA_VIRAL_2,
                interactive: true,
    title: 'SEMANA_23_CARGA_VIRAL<br />\
    <img src="styles/legend/SEMANA_23_CARGA_VIRAL_2_0.png" /> 0 - 2.5 <br />\
    <img src="styles/legend/SEMANA_23_CARGA_VIRAL_2_1.png" /> 2.5 - 4 <br />\
    <img src="styles/legend/SEMANA_23_CARGA_VIRAL_2_2.png" /> 4 - 5 <br />\
    <img src="styles/legend/SEMANA_23_CARGA_VIRAL_2_3.png" /> 5 - 6 <br />\
    <img src="styles/legend/SEMANA_23_CARGA_VIRAL_2_4.png" /> 6 < <br />'
        });
var format_SEMANA_22_CARGA_VIRAL_3 = new ol.format.GeoJSON();
var features_SEMANA_22_CARGA_VIRAL_3 = format_SEMANA_22_CARGA_VIRAL_3.readFeatures(json_SEMANA_22_CARGA_VIRAL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_SEMANA_22_CARGA_VIRAL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEMANA_22_CARGA_VIRAL_3.addFeatures(features_SEMANA_22_CARGA_VIRAL_3);
var lyr_SEMANA_22_CARGA_VIRAL_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEMANA_22_CARGA_VIRAL_3, 
                style: style_SEMANA_22_CARGA_VIRAL_3,
                interactive: true,
    title: 'SEMANA_22_CARGA_VIRAL<br />\
    <img src="styles/legend/SEMANA_22_CARGA_VIRAL_3_0.png" /> 0 - 2.5 <br />\
    <img src="styles/legend/SEMANA_22_CARGA_VIRAL_3_1.png" /> 2.5 - 4 <br />\
    <img src="styles/legend/SEMANA_22_CARGA_VIRAL_3_2.png" /> 4 - 5 <br />\
    <img src="styles/legend/SEMANA_22_CARGA_VIRAL_3_3.png" /> 5 - 6 <br />\
    <img src="styles/legend/SEMANA_22_CARGA_VIRAL_3_4.png" /> 6 < <br />'
        });
var format_PTOS_PTAR_4 = new ol.format.GeoJSON();
var features_PTOS_PTAR_4 = format_PTOS_PTAR_4.readFeatures(json_PTOS_PTAR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PTOS_PTAR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTOS_PTAR_4.addFeatures(features_PTOS_PTAR_4);cluster_PTOS_PTAR_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PTOS_PTAR_4
});
var lyr_PTOS_PTAR_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_PTOS_PTAR_4, 
                style: style_PTOS_PTAR_4,
                interactive: true,
                title: '<img src="styles/legend/PTOS_PTAR_4.png" /> PTOS_PTAR'
            });

lyr_ESRI_0.setVisible(true);lyr_DISTRITOS_1.setVisible(true);lyr_SEMANA_23_CARGA_VIRAL_2.setVisible(true);lyr_SEMANA_22_CARGA_VIRAL_3.setVisible(true);lyr_PTOS_PTAR_4.setVisible(true);
var layersList = [lyr_ESRI_0,lyr_DISTRITOS_1,lyr_SEMANA_23_CARGA_VIRAL_2,lyr_SEMANA_22_CARGA_VIRAL_3,lyr_PTOS_PTAR_4];
lyr_DISTRITOS_1.set('fieldAliases', {'DISTRITO': 'DISTRITO', });
lyr_SEMANA_23_CARGA_VIRAL_2.set('fieldAliases', {'COD_PMONIT': 'COD_PMONIT', 'SEMANA': 'SEMANA', 'NOMBRE': 'NOMBRE', 'VALOR': 'VALOR', });
lyr_SEMANA_22_CARGA_VIRAL_3.set('fieldAliases', {'COD_PMONIT': 'COD_PMONIT', 'SEMANA': 'SEMANA', 'NOMBRE': 'NOMBRE', 'VALOR': 'VALOR', });
lyr_PTOS_PTAR_4.set('fieldAliases', {'FACILITYID': 'FACILITYID', 'NAME': 'NAME', 'STRUCTTYPE': 'STRUCTTYPE', 'OPDATE': 'OPDATE', 'LOCDESC': 'LOCDESC', 'COD_PMONIT': 'COD_PMONIT', 'POB_CONTRI': 'POB_CONTRI', 'UBIC_PTO': 'UBIC_PTO', });
lyr_DISTRITOS_1.set('fieldImages', {'DISTRITO': 'TextEdit', });
lyr_SEMANA_23_CARGA_VIRAL_2.set('fieldImages', {'COD_PMONIT': 'TextEdit', 'SEMANA': 'TextEdit', 'NOMBRE': 'TextEdit', 'VALOR': 'TextEdit', });
lyr_SEMANA_22_CARGA_VIRAL_3.set('fieldImages', {'COD_PMONIT': 'TextEdit', 'SEMANA': 'TextEdit', 'NOMBRE': 'TextEdit', 'VALOR': 'TextEdit', });
lyr_PTOS_PTAR_4.set('fieldImages', {'FACILITYID': 'TextEdit', 'NAME': 'TextEdit', 'STRUCTTYPE': 'TextEdit', 'OPDATE': 'DateTime', 'LOCDESC': 'TextEdit', 'COD_PMONIT': 'TextEdit', 'POB_CONTRI': 'Range', 'UBIC_PTO': 'TextEdit', });
lyr_DISTRITOS_1.set('fieldLabels', {'DISTRITO': 'inline label', });
lyr_SEMANA_23_CARGA_VIRAL_2.set('fieldLabels', {'COD_PMONIT': 'no label', 'SEMANA': 'no label', 'NOMBRE': 'no label', 'VALOR': 'no label', });
lyr_SEMANA_22_CARGA_VIRAL_3.set('fieldLabels', {'COD_PMONIT': 'no label', 'SEMANA': 'no label', 'NOMBRE': 'no label', 'VALOR': 'no label', });
lyr_PTOS_PTAR_4.set('fieldLabels', {'FACILITYID': 'no label', 'NAME': 'no label', 'STRUCTTYPE': 'no label', 'OPDATE': 'no label', 'LOCDESC': 'no label', 'COD_PMONIT': 'no label', 'POB_CONTRI': 'no label', 'UBIC_PTO': 'header label', });
lyr_PTOS_PTAR_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});