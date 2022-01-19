var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MKD_adm1_1 = new ol.format.GeoJSON();
var features_MKD_adm1_1 = format_MKD_adm1_1.readFeatures(json_MKD_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MKD_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MKD_adm1_1.addFeatures(features_MKD_adm1_1);
var lyr_MKD_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MKD_adm1_1, 
                style: style_MKD_adm1_1,
                interactive: false,
    title: 'MKD_adm1<br />\
    <img src="styles/legend/MKD_adm1_1_0.png" /> 0 - 20<br />\
    <img src="styles/legend/MKD_adm1_1_1.png" /> 20 - 40<br />\
    <img src="styles/legend/MKD_adm1_1_2.png" /> 40 - 60<br />\
    <img src="styles/legend/MKD_adm1_1_3.png" /> 60 - 80<br />\
    <img src="styles/legend/MKD_adm1_1_4.png" /> 80 - 100<br />\
    <img src="styles/legend/MKD_adm1_1_5.png" /> 100 - 116<br />'
        });
var format_Etablissements_2 = new ol.format.GeoJSON();
var features_Etablissements_2 = format_Etablissements_2.readFeatures(json_Etablissements_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Etablissements_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etablissements_2.addFeatures(features_Etablissements_2);cluster_Etablissements_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Etablissements_2
});
var lyr_Etablissements_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Etablissements_2, 
                style: style_Etablissements_2,
                interactive: true,
                title: '<img src="styles/legend/Etablissements_2.png" /> Etablissements'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MKD_adm1_1.setVisible(true);lyr_Etablissements_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MKD_adm1_1,lyr_Etablissements_2];
lyr_MKD_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'HASC_1': 'HASC_1', 'CCN_1': 'CCN_1', 'CCA_1': 'CCA_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'Etablissements_Nombre d\'Etudiant': 'Etablissements_Nombre d\'Etudiant', });
lyr_Etablissements_2.set('fieldAliases', {'Nom de l\'établissement en fr2': 'Nom de l\'établissement en fr2', 'Nombre d\'Etudiant': 'Nombre d\'Etudiant', 'Nombre d\'étudiant femmes': 'Nombre d\'étudiant femmes', 'Étudiants ŕ temps plein': 'Étudiants ŕ temps plein', 'Etudiant_femme_temps_plein': 'Etudiant_femme_temps_plein', 'Étudiants ŕ temps partiel': 'Étudiants ŕ temps partiel', 'Étudiants femme ŕ temps partiel': 'Étudiants femme ŕ temps partiel', 'Secteur': 'Secteur', 'Etablissement tutel': 'Etablissement tutel', 'Municipalité': 'Municipalité', 'ID_muni': 'ID_muni', 'X': 'X', 'Y': 'Y', });
lyr_MKD_adm1_1.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'Hidden', 'ID_1': 'Hidden', 'NAME_1': 'Hidden', 'HASC_1': 'Hidden', 'CCN_1': 'Hidden', 'CCA_1': 'Hidden', 'TYPE_1': 'Hidden', 'ENGTYPE_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'VARNAME_1': 'Hidden', 'Etablissements_Nombre d\'Etudiant': 'Hidden', });
lyr_Etablissements_2.set('fieldImages', {'Nom de l\'établissement en fr2': 'TextEdit', 'Nombre d\'Etudiant': 'TextEdit', 'Nombre d\'étudiant femmes': 'TextEdit', 'Étudiants ŕ temps plein': 'TextEdit', 'Etudiant_femme_temps_plein': 'TextEdit', 'Étudiants ŕ temps partiel': 'TextEdit', 'Étudiants femme ŕ temps partiel': 'TextEdit', 'Secteur': 'TextEdit', 'Etablissement tutel': 'TextEdit', 'Municipalité': 'TextEdit', 'ID_muni': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', });
lyr_MKD_adm1_1.set('fieldLabels', {});
lyr_Etablissements_2.set('fieldLabels', {'Nom de l\'établissement en fr2': 'inline label', 'Nombre d\'Etudiant': 'inline label', 'Nombre d\'étudiant femmes': 'inline label', 'Étudiants ŕ temps plein': 'inline label', 'Etudiant_femme_temps_plein': 'inline label', 'Étudiants ŕ temps partiel': 'inline label', 'Étudiants femme ŕ temps partiel': 'inline label', 'Secteur': 'inline label', 'Etablissement tutel': 'inline label', 'Municipalité': 'inline label', });
lyr_Etablissements_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});