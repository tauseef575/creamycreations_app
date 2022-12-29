'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "73ee6d2ea1220041004816534779dde8",
"assets/assets/.dart_tool/chrome-device/Default/Affiliation%2520Database": "449b28942c6f7464ea7e03cb52ca7385",
"assets/assets/.dart_tool/chrome-device/Default/Affiliation%2520Database-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/AutofillStrikeDatabase/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/BudgetDatabase/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/BudgetDatabase/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/BudgetDatabase/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/commerce_subscription_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/commerce_subscription_db/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/commerce_subscription_db/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/coupon_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/coupon_db/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/coupon_db/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/databases/Databases.db": "89f95cba7df4701a8173efa00dd6b94c",
"assets/assets/.dart_tool/chrome-device/Default/databases/Databases.db-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Download%2520Service/EntryDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Download%2520Service/EntryDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Download%2520Service/EntryDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520Scripts/000003.log": "cc4a8cff19abf3dd35d63cff1503aa5f",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520Scripts/CURRENT": "46295cac801e5d4857d09837238a6394",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520Scripts/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520Scripts/LOG": "f88139a01f258e0b47505344b37b155e",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520Scripts/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520State/000003.log": "af1d95e1f9eb485393273b25446e1ae5",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520State/CURRENT": "46295cac801e5d4857d09837238a6394",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520State/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520State/LOG": "280d02e8c0f2becbe72c0eababc9b386",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520State/LOG.old": "ef989296aee477c2e61b5fce384a964b",
"assets/assets/.dart_tool/chrome-device/Default/Extension%2520State/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
"assets/assets/.dart_tool/chrome-device/Default/Favicons": "beb4a8aeb9f0e46f22cad22a73f24221",
"assets/assets/.dart_tool/chrome-device/Default/Favicons-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Feature%2520Engagement%2520Tracker/AvailabilityDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Feature%2520Engagement%2520Tracker/AvailabilityDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Feature%2520Engagement%2520Tracker/AvailabilityDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Feature%2520Engagement%2520Tracker/EventDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Feature%2520Engagement%2520Tracker/EventDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Feature%2520Engagement%2520Tracker/EventDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/GCM%2520Store/Encryption/000003.log": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/GCM%2520Store/Encryption/CURRENT": "46295cac801e5d4857d09837238a6394",
"assets/assets/.dart_tool/chrome-device/Default/GCM%2520Store/Encryption/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/GCM%2520Store/Encryption/LOG": "336fee18696f91bddf3fe0b352b42b03",
"assets/assets/.dart_tool/chrome-device/Default/GCM%2520Store/Encryption/LOG.old": "c55a7b389b703f0f7a15ba70804d99b7",
"assets/assets/.dart_tool/chrome-device/Default/GCM%2520Store/Encryption/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
"assets/assets/.dart_tool/chrome-device/Default/heavy_ad_intervention_opt_out.db": "51a706fb9564aaf43ab31a0fd957ce75",
"assets/assets/.dart_tool/chrome-device/Default/heavy_ad_intervention_opt_out.db-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/History": "d9d963fb1a9afd8be1b0707f9b80e8b8",
"assets/assets/.dart_tool/chrome-device/Default/History-journal": "93112cd23035d52164eba292792bfca0",
"assets/assets/.dart_tool/chrome-device/Default/Local%2520Storage/leveldb/000003.log": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Local%2520Storage/leveldb/CURRENT": "46295cac801e5d4857d09837238a6394",
"assets/assets/.dart_tool/chrome-device/Default/Local%2520Storage/leveldb/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Local%2520Storage/leveldb/LOG": "a754e53323b3a64be9cf8a74fe8a8e79",
"assets/assets/.dart_tool/chrome-device/Default/Local%2520Storage/leveldb/LOG.old": "bc411f45b782e8160d3c21b7bbe0f5f3",
"assets/assets/.dart_tool/chrome-device/Default/Local%2520Storage/leveldb/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
"assets/assets/.dart_tool/chrome-device/Default/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Login%2520Data": "02d2c46697e3714e49f46b680b9a6b83",
"assets/assets/.dart_tool/chrome-device/Default/Login%2520Data%2520For%2520Account": "02d2c46697e3714e49f46b680b9a6b83",
"assets/assets/.dart_tool/chrome-device/Default/Login%2520Data%2520For%2520Account-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Login%2520Data-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Network/Cookies": "c9ff7748d8fcef4cf84a5501e996a641",
"assets/assets/.dart_tool/chrome-device/Default/Network/Cookies-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Network/Network%2520Persistent%2520State": "cd547fa68fabf0022eed80a24387902d",
"assets/assets/.dart_tool/chrome-device/Default/Network/NetworkDataMigrated": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Network/Reporting%2520and%2520NEL": "6f58638b4d244d7097ce0fee01626921",
"assets/assets/.dart_tool/chrome-device/Default/Network/Reporting%2520and%2520NEL-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Network/TransportSecurity": "d5e092aed27bc07210251c6478d7317f",
"assets/assets/.dart_tool/chrome-device/Default/Network%2520Action%2520Predictor": "969245a6e27adab5f73573b7e19d7a1c",
"assets/assets/.dart_tool/chrome-device/Default/Network%2520Action%2520Predictor-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/optimization_guide_hint_cache_store/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/optimization_guide_model_metadata_store/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/optimization_guide_model_metadata_store/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/optimization_guide_model_metadata_store/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/optimization_guide_prediction_model_downloads/24365583-d040-4a49-bf0a-255f45bef83f/model.tflite": "89932adf9cc14986ca58687a6fad996d",
"assets/assets/.dart_tool/chrome-device/Default/optimization_guide_prediction_model_downloads/2e98c9bb-e79d-4351-95f5-dc9c1e687062/model.tflite": "6d7c2f9e94664539dec99b3233301b01",
"assets/assets/.dart_tool/chrome-device/Default/optimization_guide_prediction_model_downloads/8537fb43-a5fd-4e0f-94e6-e2782b88db25/model.tflite": "098d40e16bb8b69da3edaa3fef0918cc",
"assets/assets/.dart_tool/chrome-device/Default/optimization_guide_prediction_model_downloads/9af9e4b9-f67e-4227-a614-a42b026b9a46/model.tflite": "467e50dd93686ea03108856f5f1aeb60",
"assets/assets/.dart_tool/chrome-device/Default/Preferences": "e6034678c592b375efa809a06a415a62",
"assets/assets/.dart_tool/chrome-device/Default/PreferredApps": "2b432fef211c69c745aca86de4f8e4ab",
"assets/assets/.dart_tool/chrome-device/Default/README": "883d62acd72005f3ad7a14500d482033",
"assets/assets/.dart_tool/chrome-device/Default/Safe%2520Browsing%2520Network/NetworkDataMigrated": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Safe%2520Browsing%2520Network/Safe%2520Browsing%2520Cookies": "c9ff7748d8fcef4cf84a5501e996a641",
"assets/assets/.dart_tool/chrome-device/Default/Safe%2520Browsing%2520Network/Safe%2520Browsing%2520Cookies-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Secure%2520Preferences": "9bbd01acd3d47ecd2598ad4f8e88614c",
"assets/assets/.dart_tool/chrome-device/Default/Segmentation%2520Platform/SegmentInfoDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Segmentation%2520Platform/SegmentInfoDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Segmentation%2520Platform/SegmentInfoDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Segmentation%2520Platform/SignalDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Segmentation%2520Platform/SignalDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Segmentation%2520Platform/SignalDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Segmentation%2520Platform/SignalStorageConfigDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Segmentation%2520Platform/SignalStorageConfigDB/LOG": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Segmentation%2520Platform/SignalStorageConfigDB/LOG.old": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Service%2520Worker/Database/000003.log": "03405fae029bcd2d9658d97779ff43a7",
"assets/assets/.dart_tool/chrome-device/Default/Service%2520Worker/Database/CURRENT": "46295cac801e5d4857d09837238a6394",
"assets/assets/.dart_tool/chrome-device/Default/Service%2520Worker/Database/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Service%2520Worker/Database/LOG": "34d3978d6e2921cfa3459f3b3baaf4ce",
"assets/assets/.dart_tool/chrome-device/Default/Service%2520Worker/Database/LOG.old": "ccb4c5e0aa6220a44b7a6a7f67bcf2b9",
"assets/assets/.dart_tool/chrome-device/Default/Service%2520Worker/Database/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
"assets/assets/.dart_tool/chrome-device/Default/Service%2520Worker/ScriptCache/2cc80dabc69f58b6_0": "1ce6e6b888af3d60863d685e0cdbb1a1",
"assets/assets/.dart_tool/chrome-device/Default/Service%2520Worker/ScriptCache/4cb013792b196a35_0": "1cd6137b26386b92e1eace8c6a4ceceb",
"assets/assets/.dart_tool/chrome-device/Default/Service%2520Worker/ScriptCache/index": "54cb446f628b2ea4a5bce5769910512e",
"assets/assets/.dart_tool/chrome-device/Default/Service%2520Worker/ScriptCache/index-dir/the-real-index": "886f38a4324bfb0cc4d00d974f146f73",
"assets/assets/.dart_tool/chrome-device/Default/Session%2520Storage/000003.log": "e3a0238c825db90290119b80dbaaf901",
"assets/assets/.dart_tool/chrome-device/Default/Session%2520Storage/CURRENT": "46295cac801e5d4857d09837238a6394",
"assets/assets/.dart_tool/chrome-device/Default/Session%2520Storage/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Session%2520Storage/LOG": "a9dd84e114404740cf988629b0792fd1",
"assets/assets/.dart_tool/chrome-device/Default/Session%2520Storage/LOG.old": "022c7bba50e55053b28bb900e85f0398",
"assets/assets/.dart_tool/chrome-device/Default/Session%2520Storage/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
"assets/assets/.dart_tool/chrome-device/Default/Sessions/Session_13316194980246446": "6b139d6971c5a5e76d63d3188c59db91",
"assets/assets/.dart_tool/chrome-device/Default/Sessions/Session_13316195726634388": "2d2cd45dfac531588ad497640cdff4ca",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/000003.log": "9de265a803aadf60129b544350a2ab65",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/CURRENT": "46295cac801e5d4857d09837238a6394",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/LOG": "efed4b89c833ecc22c1239392fe02fd3",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/LOG.old": "50aadf5c6888ad263b176f824bd29b94",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/metadata/000003.log": "db98fe1c5a0160106425cea754d21a1a",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/metadata/CURRENT": "46295cac801e5d4857d09837238a6394",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/metadata/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/metadata/LOG": "e2ed718c5a6d942bcbbe3fc5a54406a2",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/metadata/LOG.old": "0c3d7bd21e06b2a16adbb16ec13db568",
"assets/assets/.dart_tool/chrome-device/Default/shared_proto_db/metadata/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
"assets/assets/.dart_tool/chrome-device/Default/Shortcuts": "f221bccd85363b8b4cda1dcc96d0daef",
"assets/assets/.dart_tool/chrome-device/Default/Shortcuts-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Site%2520Characteristics%2520Database/000003.log": "48c2f200f51c4858b6c9aacbbf7cccac",
"assets/assets/.dart_tool/chrome-device/Default/Site%2520Characteristics%2520Database/CURRENT": "46295cac801e5d4857d09837238a6394",
"assets/assets/.dart_tool/chrome-device/Default/Site%2520Characteristics%2520Database/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Site%2520Characteristics%2520Database/LOG": "7404893c21b773d73e5c7023a68769a8",
"assets/assets/.dart_tool/chrome-device/Default/Site%2520Characteristics%2520Database/LOG.old": "237ce6808a52b1ecbe95598e4ebb7837",
"assets/assets/.dart_tool/chrome-device/Default/Site%2520Characteristics%2520Database/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
"assets/assets/.dart_tool/chrome-device/Default/Sync%2520Data/LevelDB/000003.log": "90881c9c26f29fca29815a08ba858544",
"assets/assets/.dart_tool/chrome-device/Default/Sync%2520Data/LevelDB/CURRENT": "46295cac801e5d4857d09837238a6394",
"assets/assets/.dart_tool/chrome-device/Default/Sync%2520Data/LevelDB/LOCK": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/Sync%2520Data/LevelDB/LOG": "b6e13ea44ddda83d33fe80b185f8b69c",
"assets/assets/.dart_tool/chrome-device/Default/Sync%2520Data/LevelDB/LOG.old": "34ff3c066bc834d2a78621c540a1ac54",
"assets/assets/.dart_tool/chrome-device/Default/Sync%2520Data/LevelDB/MANIFEST-000001": "5af87dfd673ba2115e2fcf5cfdb727ab",
"assets/assets/.dart_tool/chrome-device/Default/Top%2520Sites": "fb5f392ed433a33140862b4ff4c54e08",
"assets/assets/.dart_tool/chrome-device/Default/Top%2520Sites-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/trusted_vault.pb": "3433ccf3e03fc35b634cd0627833b0ad",
"assets/assets/.dart_tool/chrome-device/Default/Visited%2520Links": "12475b2806d1cab95cc40f59d13b6ef8",
"assets/assets/.dart_tool/chrome-device/Default/Web%2520Data": "1ec05571258de1455991d3a7c0c7a7fc",
"assets/assets/.dart_tool/chrome-device/Default/Web%2520Data-journal": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/.dart_tool/chrome-device/Default/WebStorage/QuotaManager": "6d05fe26657d78b2b827eeb8112b5543",
"assets/assets/.dart_tool/chrome-device/Default/WebStorage/QuotaManager-journal": "e25fd95ae1badd978d9d20add67d14eb",
"assets/assets/.dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/app.dill": "db4c40124ffc775ae0b07c801ed8c961",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/app.dill.deps": "aba88610c164ec5aedd7f4bfa016b6bf",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/dart2js.d": "dd443e7d9819fd62076d989dbfc06b1f",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/dart2js.stamp": "3fea858030e306cb5d34e09bde36f32e",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/flutter_assets.d": "98ed591a983924008c3f73404925eaaf",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/main.dart": "a72146d1d0b8159ad9b78794d1535fb0",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/main.dart.js": "b4711e94e9dd44af4716f03e2666518d",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/main.dart.js.deps": "db83c72952dfed1eef4755ff416f4125",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/outputs.json": "c3797af5e6f10e7d886579d4c1d85fa1",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/service_worker.d": "458597de7e6a54e2b9a3010810492107",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/web_entrypoint.stamp": "2f0fac2172953d47682820f02ad5bb54",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/web_release_bundle.stamp": "deb8e3e7d026e1f5387a2a0dc2d51ef2",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/web_resources.d": "d93a86817895dc0251148c95cbd00174",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/web_service_worker.stamp": "b77bb74c75a73ebe469a7476e32f55bb",
"assets/assets/.dart_tool/flutter_build/6a902d59cda39697e03c4bbc9af0d8dc/web_static_assets.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"assets/assets/.dart_tool/package_config.json": "559bed2e66234b2a1eb37c6fb6a402dd",
"assets/assets/.dart_tool/package_config_subset": "065b4a6c0c40aa0f1e4bbf267d5421d9",
"assets/assets/.dart_tool/version": "226abcb90eb398c8cff1a3d63820ee0c",
"assets/assets/.git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/assets/.git/config": "b18b14e6e6857aa775972391a523c112",
"assets/assets/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"assets/assets/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"assets/assets/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"assets/assets/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"assets/assets/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"assets/assets/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"assets/assets/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"assets/assets/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"assets/assets/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"assets/assets/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"assets/assets/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"assets/assets/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"assets/assets/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"assets/assets/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"assets/assets/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"assets/assets/.git/index": "cea96dc37348fe2841853634ffcdffcf",
"assets/assets/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/assets/.git/logs/HEAD": "393901b97cd4f79af5a1b2acf862d005",
"assets/assets/.git/logs/refs/heads/main": "47e1b6bce26fa8e2f55d2610e793cbfd",
"assets/assets/.git/logs/refs/remotes/origin/main": "7d29af00633b738ca2c400f6f6f3b0ec",
"assets/assets/.git/objects/00/8fa38e5fe5090348fa498c243aa94b89d95e51": "18c5b5873bf5a85f1623b7e42486bcc1",
"assets/assets/.git/objects/01/7aab93f3d179d449fa7b06b2ca4bbe3fa66879": "181f9fda59fed09b8d5b924a27497ac9",
"assets/assets/.git/objects/02/98a6002e7d1a3fcb037ec1187b3f0832a38ba9": "df7f2f1f67062b5426f54ffd1ef9fe4d",
"assets/assets/.git/objects/04/1a3855474575f3224e068641f65d9623220a8a": "2d9c42ba702acf1be7fa2fb1de56e2b2",
"assets/assets/.git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "49dba9cdefacac2602a7af98a656e661",
"assets/assets/.git/objects/04/8c9de709f14a87e0728d4c56c60750c95d9316": "a945020f821208d95b3bc7813e867cf2",
"assets/assets/.git/objects/04/90f0a142489dc3f785e8adc94f1490596c9863": "036c10e416adf986a9c4f0da3dca905e",
"assets/assets/.git/objects/05/79914241c3cb28836edd11ef2bf2fbcdd79b74": "92042366e582669fabfa1ad8f8e2f55b",
"assets/assets/.git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
"assets/assets/.git/objects/06/d5f490d27112a0a24df4e168fbc26c0116a1a7": "5f71badd90aae84671e9463c7309e629",
"assets/assets/.git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
"assets/assets/.git/objects/0a/3f5fa40fb3d1e0710331a48de5d256da3f275d": "15924b1217c401aba33f13069f7d81d5",
"assets/assets/.git/objects/0a/529be92dcd67fc300e924d508d70ec1225e8c0": "5e392f627f85b6ce25169c0cc8588350",
"assets/assets/.git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
"assets/assets/.git/objects/0c/3196aa3b23583240d0ffc643eac916e56721e2": "7c7af75a03cb1cc319d2302b0af9edba",
"assets/assets/.git/objects/0e/c303439225b78712f49115768196d8d76f6790": "383f775ddf0900dd9fe74e867c012ba4",
"assets/assets/.git/objects/11/5d2e366f97433d0272af9ef77992277e823215": "0201bcc5af699ff5b95c123b7b80082a",
"assets/assets/.git/objects/13/b35eba55c6dabc3aac36f33d859266c18fa0d0": "ccb5b80ef3b4fb1030a8a4f520f3f5e8",
"assets/assets/.git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
"assets/assets/.git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
"assets/assets/.git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
"assets/assets/.git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
"assets/assets/.git/objects/19/5980f4a79f283e2e337031a507d65e3730dd10": "cfd25dfb6f380bc2287f06909642b80b",
"assets/assets/.git/objects/19/f590628b080de16a0f93aa1a224b253ea88585": "971ea7dc080c5248bec84e06e7a029d5",
"assets/assets/.git/objects/1a/565b681a7113c225c0d2bf78308c1e13382231": "8e8f56bec7b15086569b9cc804224506",
"assets/assets/.git/objects/1a/a8bec2bfd15ba4b441bc145dc8d235873bb43c": "b6fb04b74f78de1b31f59f1878666934",
"assets/assets/.git/objects/1c/e2fa7fe8503ce6accd7a6cf8d8db834b8d0230": "e59d30a14564be614607d069d446dccc",
"assets/assets/.git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
"assets/assets/.git/objects/1f/9ad88c1d224026bdade0be7707beb9062baaf1": "0525ce10630f361c9c81d26b45e9a686",
"assets/assets/.git/objects/22/bb80824f8b55bbc0dd18fc54635d3fb5f2edc7": "3c4c6153a30efde96fb78974c95b8b1e",
"assets/assets/.git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
"assets/assets/.git/objects/23/02ff6754ff8dbafb39847915d42d91ec0289c2": "d4f60e2dd571d69b056fc856aa1e466a",
"assets/assets/.git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
"assets/assets/.git/objects/26/5f05d08c39c6cc41bd1d0e1babe110b33b7b13": "aa844bbb4805cce5e1c9243e8108e5dd",
"assets/assets/.git/objects/27/22837ec9181c3c1b2f1c1298870185c03ba354": "55274092f8c707defc529cc6940e63ee",
"assets/assets/.git/objects/27/c1e17101ec1d5f27eea0e93283f443af4a4ec1": "2c745794f56fa7242a85073166f59d5c",
"assets/assets/.git/objects/28/8ad64e6324f0f3f7a0279ed2e931dc666dff6a": "7b54672d89b74058a9caffffd8ec8c25",
"assets/assets/.git/objects/29/f10923ab0da7ec7368c117e29ae0b6bd1900e1": "2b18bce22705571ab61fae2203a6a437",
"assets/assets/.git/objects/2a/89c2ebf6f3787b1d5ffd46888a3c01483c543d": "e8adbdbb7e8a93634c58c38301c7c1cb",
"assets/assets/.git/objects/2a/bc8418a41425fc3694b52f6d917369d6c342ad": "3d77e22768df1a73d966f24fe3dcbfe7",
"assets/assets/.git/objects/2c/a242716e186aea410dc58343768059b0bc6648": "31ee9a94fad010c668458bb76623a858",
"assets/assets/.git/objects/2e/1de87a7eb61e17463f7406106f6c413533cecf": "f4970286a19c04f87217910d26430ddf",
"assets/assets/.git/objects/2e/b05ea15cb5a611031fe1476f9d3ff767508173": "6b59adb388ecfc561409f69cd198c02e",
"assets/assets/.git/objects/2f/1632cfddf3d9dade342351e627a0a75609fb46": "eebc09df6f2f2370e95a1eb0bc1fb2c5",
"assets/assets/.git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
"assets/assets/.git/objects/30/4a1c1514dd81d5298dca9996372af508ab4e2c": "b73748187ce104c7188e57df21ed0f7a",
"assets/assets/.git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
"assets/assets/.git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "aa6f1636c8ce237c3c416d222abf03da",
"assets/assets/.git/objects/32/6c0e72c9d820600887813b3b98d0dd69c5d4e8": "3030e2c76fcd41356672eee54ca3bd94",
"assets/assets/.git/objects/32/c7a70755ea39dc29b1aa6123e3a72d89202493": "8aca9324e330247f0860fa977d67043c",
"assets/assets/.git/objects/32/e730433a0a02876fba9648ae78ac5331019319": "869840f92af54492f505c15ec2ffe0ec",
"assets/assets/.git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f12c4e44afc2ef65f4df0d401fdf25b5",
"assets/assets/.git/objects/36/6cf4eb46d0530f698608bde8f8f74dfc88fc07": "d37ba91f5b1889cdcb8faf12fea2ab12",
"assets/assets/.git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "9d308f3efbc512e2b01277fb7565acef",
"assets/assets/.git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
"assets/assets/.git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
"assets/assets/.git/objects/39/36b06e1402b3490b2a53e346dde55bbdcd54f2": "2550043c7bed64dfeed632fc52b783d5",
"assets/assets/.git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
"assets/assets/.git/objects/39/75d62b95a448a6026114a290fdaf043039ba66": "4299f57f0bd3001629561eafcdeb1594",
"assets/assets/.git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
"assets/assets/.git/objects/3b/43579431e33e6700c5e3cba8390237a31af039": "a5d99b6553008a52bc2fb72ab5cb2fc9",
"assets/assets/.git/objects/3c/472b99c6f3501ff93513bcdf39dabe4f236a55": "f1663221d4180a0bffd3a0a98ec3b762",
"assets/assets/.git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
"assets/assets/.git/objects/42/4803df339fffa19490b19a63d447732d4cff11": "0c36af2080f26099bdb8180bd8254ae6",
"assets/assets/.git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "d13c60a94845ee93e5124ec90980bb48",
"assets/assets/.git/objects/43/08314f53a7640e76c18e2d3a01138ce0a1308c": "52621a909d5fdda95ebbf61a7282111b",
"assets/assets/.git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
"assets/assets/.git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
"assets/assets/.git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "3c2dcd6a17cdfc0957293d41ef712d24",
"assets/assets/.git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "171b7f459d8f957102dab0e55cc51039",
"assets/assets/.git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
"assets/assets/.git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "b4ba046789856764dffa013b321284b3",
"assets/assets/.git/objects/50/d3a39411ba491e1e2affab742409e41cc86941": "03fbaf939dbfbcc518db97ec391370ef",
"assets/assets/.git/objects/52/1586201e2eb5dbd1ce57dba9675f3229459729": "a867b1362ce6367733f74e1ffe0a78e6",
"assets/assets/.git/objects/53/cb2c2be33457b1eaf426ae13f971278534d8d0": "3cab64d18cdcce07ae43e06c97de728d",
"assets/assets/.git/objects/54/18c9f5395573cfd0fb8290b7ac946030f11ec6": "6b7c566b22549c2ea8f5f843db3bdac8",
"assets/assets/.git/objects/55/6cd7215cabdad56c5ce6760af112aac7d0338a": "cb223a611f5b06699a101604d3818400",
"assets/assets/.git/objects/55/ff3d7fcf8b2a36e1db286cfae4ef130eaf97f9": "083811325d6e1a3fa36e109607a93a74",
"assets/assets/.git/objects/56/becee4b97a362383cc466b3f76d4ec075ea2b6": "c5f18f4fba8afc3bc5d4c64f2e8a9a1e",
"assets/assets/.git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
"assets/assets/.git/objects/59/d9fc94e5474c698faf506497bd3d486e15a201": "566185efbf0497f255d55665d29b5b0f",
"assets/assets/.git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
"assets/assets/.git/objects/5c/00de0bffc050505129172bd28668c8494df697": "1b313a2da0bdf96679a6ee376792ca8f",
"assets/assets/.git/objects/5d/e69669245b4e0765d60cd9e731d393c526aed5": "83b25456b6fe038759cd92a168f562fc",
"assets/assets/.git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
"assets/assets/.git/objects/61/d8bd674787302a447706dd070bfdcdedd3c7be": "a0790601d8e50b0453357e638707e0a7",
"assets/assets/.git/objects/64/351c08566cdf56b87ffb5a7262186b2fb1c444": "e7db6b5719f249a609b3b604f0ef4f81",
"assets/assets/.git/objects/66/868c481bea358f96977f854929a9fe9639b9ac": "dcf5c39e9124705e9c71a55297ad8cda",
"assets/assets/.git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
"assets/assets/.git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
"assets/assets/.git/objects/6c/3f7b1df8337a4a173d22550ce6eee5636e56d9": "b5fab2e538ef323898e6f7cf48aff71d",
"assets/assets/.git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
"assets/assets/.git/objects/6c/f02180290623d49bd18dd54db89598387edf92": "e28d9d7a27d40b277c3dc8c3d63ff8dc",
"assets/assets/.git/objects/6d/01332bd77ff70c8c8ce3ee3dd1fc0ae5de9b85": "085e4677d27e148da42f777ca50fec00",
"assets/assets/.git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
"assets/assets/.git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "e67768e46e6cb02c375dcbe6443df2e5",
"assets/assets/.git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
"assets/assets/.git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
"assets/assets/.git/objects/70/a57f7d3dbf3b7f1ee51984190bc95a6ddd6573": "cf0ea685c25bd370b0cebc87a1962de2",
"assets/assets/.git/objects/71/541bb74b4a887e0b30245edb84b73e44064796": "caf75c509d9b0bc7c268dc6e38bb05c1",
"assets/assets/.git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
"assets/assets/.git/objects/72/c662f5bbdd6e8e1fd1f02777fce9eabd1f8155": "3d9ad64636966bbbebe4605a0d83efc7",
"assets/assets/.git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "32c4c29220bb05d460a969e7df99412c",
"assets/assets/.git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
"assets/assets/.git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
"assets/assets/.git/objects/77/681f469c9b9a74f4b9c2acb5e4a76be617e44b": "76c325c24d397756430a0300e7d7077b",
"assets/assets/.git/objects/79/7d452e458972bab9d994556c8305db4c827017": "009f1a67118a52459bbc67f56c2ffd4a",
"assets/assets/.git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
"assets/assets/.git/objects/7b/a775e1f920349fec2fc48a40a95f7898e38474": "2ac383dc43812d11d13a6afe4b57110e",
"assets/assets/.git/objects/7d/412892bf0e477bec8435a10087ddff77dd513a": "a6e6ab7176f7d3ac62b259a6853de991",
"assets/assets/.git/objects/7d/c2c541021ae92709d502b773aae839c59d9c80": "ab6b90ab3784be20166e1156c4b2ca65",
"assets/assets/.git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "a256672b7db051545b2b39eb821c1510",
"assets/assets/.git/objects/82/2b6bb3db34b301af0b7a822e53e8379ea450d0": "94dd12bf919a3ac448500a917a816063",
"assets/assets/.git/objects/82/b6f9d9a33e198f5747104729e1fcef999772a5": "32d0349a1626c50624f6aab0900c31d8",
"assets/assets/.git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "a7755246641eb6f0ea897123c42e7eeb",
"assets/assets/.git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "97bf964ac33d3f622d940921761e740c",
"assets/assets/.git/objects/86/a7c3b1b6119f7dbdb8cec74f1b5b3e076bf949": "6a613891f55546675267dc93a78ff2c1",
"assets/assets/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"assets/assets/.git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "41d25b277c37a913abe0083c22f1e1b2",
"assets/assets/.git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
"assets/assets/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"assets/assets/.git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
"assets/assets/.git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "4e20d4660135ff8d41852fa5b986bfb5",
"assets/assets/.git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
"assets/assets/.git/objects/8c/a30403810b9e6232a390b192668664ea101dbe": "935aa33aadb2b1ffcbb187840fee028f",
"assets/assets/.git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
"assets/assets/.git/objects/93/0d2071a324ee6050cccd87a14495557b63416f": "27184823c9e5055a30e98ccf70968672",
"assets/assets/.git/objects/93/26aa992e7b660cc3126ce78ae8d867a28c1762": "5506eaf67bee7ffccf19484cb3978167",
"assets/assets/.git/objects/93/af1840780a26ad8b54a92d1815b4532e858e7f": "b27b043eb6cfdfa8f39eebf7b8389741",
"assets/assets/.git/objects/94/ace7a28663174f8470d2ea9ac88acd384625b1": "d8ddda0cc0e25f4680615493bfbb9105",
"assets/assets/.git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
"assets/assets/.git/objects/96/25e105df39e8429814f3189a8015087720cba1": "dc4647a7fac13cea763bcd9ca601edf5",
"assets/assets/.git/objects/98/e40a7ea175c82dbf8435a283b2bf4eaa0d2ec5": "50a565b096b0cbfd531f5a92b5a06a96",
"assets/assets/.git/objects/9a/35f3046a20e23f1e474cbb9679afbcd7886868": "6088eb4d4af2ffd405995f5cc292ed45",
"assets/assets/.git/objects/9a/fbdda427d1d2ce542c493ad95831500834e753": "ae729c25966b32f43bb8e7fa3e42839a",
"assets/assets/.git/objects/9b/2b180fd222e12d0ffa997969ec8205ff6da240": "3d950ccde8a665b1e54e6bdef01df671",
"assets/assets/.git/objects/9c/0ac19e6bb13fa794cee299f1e0ab3a6287f460": "be4b615a0b41a570bde8dcb9cd9f14ed",
"assets/assets/.git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
"assets/assets/.git/objects/a0/4793e357076c0b713148d39c488bda6c0ab720": "b06383d1dd6003e4d5ca54b32d15d8a1",
"assets/assets/.git/objects/a1/e6c3ebbf25b84c74e12ceeb1f4a334a0b2e456": "51aead3f6a7d08a5fbf9e9d6c37f07cb",
"assets/assets/.git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "48569d95657b1f4b8fad6b6e730d4334",
"assets/assets/.git/objects/a4/2ea7687cb67e55af955dc8874a072e087ce3ed": "b51e31b93bc1bfcb23a9226ab3e3c5eb",
"assets/assets/.git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
"assets/assets/.git/objects/a6/19843f55e60c2fc168fe9f0afc867c44799a04": "62cce156a87ced41bad31aa355bf32df",
"assets/assets/.git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
"assets/assets/.git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "bbe3fc3e1c5e6135804ae185063dc396",
"assets/assets/.git/objects/a8/e64fdfeb26c1371bc1169043e31175cea36ef3": "ee36831733b04277c6a77d9ebfa7d16c",
"assets/assets/.git/objects/a8/e7478968a4f0f6ea63e020d6053eb6dc140c36": "fb384a746802e52f4fc500bc1639ea48",
"assets/assets/.git/objects/a9/f8e4a3e87bf48b4443b0cc2b8a56fac59a365c": "4b8c21dbdf0c60df3d55aab1cdbb69d4",
"assets/assets/.git/objects/ac/913d4c4837ef740228148611572b61050839a9": "847f7be3b0e2cfee2dde62884d09bccc",
"assets/assets/.git/objects/ac/95ee52443d01d127e76b24197d83521aef75d9": "4b3cb7fca8f043264675ba964ce42814",
"assets/assets/.git/objects/ad/f669ca13ab24f7d1310f1c4998e4cb51e3a3f9": "dbf62b475e8e33bc637ace419252f7d8",
"assets/assets/.git/objects/ae/6679602d5a23fc4451d94c88e2568d369d0f30": "f04a4bac36b319821ce4dfa4759d9be7",
"assets/assets/.git/objects/b1/73862ebba1b9f6b3f29ba7c85dcbb7b519cfc7": "50ef8a2d58fc16a5aeb05d43454c1fb9",
"assets/assets/.git/objects/b2/5e363efa423f6d2dd97d425eb0f1364dbcbe3e": "2820837aa1faa39ed5cf46ba48151ff4",
"assets/assets/.git/objects/b2/a8a4ac0405c5bcdab68103ea2e095bb9f0b892": "531174575af94201ee5c8b9cd2b90c8d",
"assets/assets/.git/objects/b6/794e0a706dd4bd18c11dfb6cbece912c9efd2d": "88acb179e59dbf7a454edcd9184617fc",
"assets/assets/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"assets/assets/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"assets/assets/.git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "d81d171c0590dfeb78e8d6c404330bb1",
"assets/assets/.git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "3fdbb77ecc95ce55cfcedebbe781f150",
"assets/assets/.git/objects/bc/f0b43c40123906adeeca3244608d8aef870d1e": "63ee33aff3e962cfc7944343dccf7e13",
"assets/assets/.git/objects/bd/b57226d5f2bd20f11934f4903f16459cf52379": "3289c6c0ee8813484d2b33d6c6e1df10",
"assets/assets/.git/objects/be/ca5651131a41b6f7b1db4ad17ef08b7c102ec8": "41ef98407730d8355490c7388a1bc035",
"assets/assets/.git/objects/c0/3fb90d3a19cb8de7f0d7f4ca0291ab823a0681": "7d780d5e8549c19eeb76acaa38b0bd90",
"assets/assets/.git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
"assets/assets/.git/objects/c2/efd0b608ba84712fb3e1d01122468a50c7fba1": "5841aa09610800cbb88a643fdc9ede63",
"assets/assets/.git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
"assets/assets/.git/objects/c5/2b233356f263b6d26b91b965d7b46653ab6f61": "5197422184d231e8a079d6ca5705036d",
"assets/assets/.git/objects/c8/6632d8a6b9c87253eb597d2607460abf793ad3": "182503991567a1d1b9904639ae7e6b4b",
"assets/assets/.git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
"assets/assets/.git/objects/cc/576f888a925fb53bbeb37cac70a0951471cfc0": "bdc50735e35a2750b2d998c9114fa618",
"assets/assets/.git/objects/cc/cf817a52206e8a8eef501faed292993ff21a31": "1b4dd6ab7f4ca9073eac414dd6794fd6",
"assets/assets/.git/objects/cc/f8d4f2b00febb45d40843ed109257605d52ad0": "09fa658ea4b3593e6da8df5d625acb05",
"assets/assets/.git/objects/d0/651fda5fbc1e0e728fe38d2abc65f7250c177d": "6bc02ac128f6ce47d177770d0a6103f8",
"assets/assets/.git/objects/d1/5fde428462fbfc4a2b1d44e6016f6da1d64ada": "117fb076abeef4654db02f3a24d8bb84",
"assets/assets/.git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
"assets/assets/.git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
"assets/assets/.git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
"assets/assets/.git/objects/d4/884d1795a5e51c417f6e50eb2d6aa669f5ba63": "b5d88edc0d27c55bc36eb3a0eba8f746",
"assets/assets/.git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
"assets/assets/.git/objects/d5/3ef6437726b9d1558eda97582804175c0010a2": "764cc945f02614c5bb082a403a0c55e0",
"assets/assets/.git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
"assets/assets/.git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
"assets/assets/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"assets/assets/.git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
"assets/assets/.git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
"assets/assets/.git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
"assets/assets/.git/objects/dc/6c0c3b596acf004ef4b3a61344b5da20681e4a": "0af580ecbf0e3cea8f0bfa1f8eca8de5",
"assets/assets/.git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
"assets/assets/.git/objects/dd/7864a23cc4ea1a138d50660ab00745e5c5122f": "48b6e769a1080c06c662d21a73e98cbc",
"assets/assets/.git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "e943b985c0fbc94ad354f2ada89b854d",
"assets/assets/.git/objects/de/486eb36b158a79b47a334b67238c808057c98f": "8591a95b423228f8c5604ed3c54744e5",
"assets/assets/.git/objects/de/9755406f8ea1749f73377a4bc7a9eceb6978d6": "6f1dae7c810e38aeb9d6129ac938950b",
"assets/assets/.git/objects/de/f60d6be8da0a22b2771ddd691ec3d64fc9c1a7": "c8ac7928f302ab458af80ad5495c5a36",
"assets/assets/.git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "fccf1f0ce075ef8d3a1ae932cbc31552",
"assets/assets/.git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
"assets/assets/.git/objects/e1/7a29ae9cec23fd5ba98e09ef6d3095d2dcb379": "be831084b4426a11032828fdc2d676af",
"assets/assets/.git/objects/e2/026f311b9a422ef34a94ba7a99697ccab8e249": "ce7f504bdcb9b7b89def4f9f42911b9e",
"assets/assets/.git/objects/e3/3142e71bfc751ce1d7a7d46406235425786005": "71cc9d64983f89c56658f9ade44a4809",
"assets/assets/.git/objects/e4/2adcb34c2d30f4e7e4426422385dfa72f63114": "0521d186b437c93c9a91ef85aa62a476",
"assets/assets/.git/objects/e5/0c3a02b05fde567a74592e558979aff7717074": "ded53707d25f0bf5091440ecb83630b8",
"assets/assets/.git/objects/e7/1a16d23d05881b554326e645083799ab9bfc5e": "35049fca5b8153e0c0cd520b5503c269",
"assets/assets/.git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
"assets/assets/.git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "45a0061e76512ff597b88e29748f3ada",
"assets/assets/.git/objects/ea/27997b965eb1de99ff72a21e71e1be8a0fd576": "ea06f958e65a7768b058b8cfab8de9d8",
"assets/assets/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"assets/assets/.git/objects/ed/783dc279b8a9202a91dde5e00d98bcc79b2d37": "31619d80f5f218254d6401e6a3c0362f",
"assets/assets/.git/objects/ef/14a61eac72c3004d9c48b71627ba4b4049289f": "65a9ffcc1948c0484bc2bf049b907a78",
"assets/assets/.git/objects/ef/3b1d021af0ab5ea7e62ae77fb13078998c27da": "2ac4babb5a125aec1999a3148c00c8f9",
"assets/assets/.git/objects/ef/8345f80c68ccc6cd79f1d13a098e7fdc74352a": "a51d7fffe49e043dca1355cb27eb7740",
"assets/assets/.git/objects/f0/83318e09ca1b6b8484b1694a149f0c5d5cac1d": "541f4960a70ea9c895b2c21196ef40a7",
"assets/assets/.git/objects/f1/83e55dd0fd46cb02053c06743cc3b35186006c": "c6fdf664cb670d49a2d1b8089512f30a",
"assets/assets/.git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
"assets/assets/.git/objects/f3/0d23b32a680d98fc638236b6229986047a217b": "2e76f032a014f8c76f12cdb1ca456d79",
"assets/assets/.git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
"assets/assets/.git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
"assets/assets/.git/objects/f4/9565416a392a322ad3b6ab90828e3d841b6c47": "e6fd22f949ffb866c6cf04ab3a6df631",
"assets/assets/.git/objects/f5/8bb76100e82ec653e9b32a02d18d9232922d51": "e732ad2f094017daf1f16b50afd7c1d0",
"assets/assets/.git/objects/f5/bf9fa0f536c285b8c0c2ef39b9714c66fae243": "828ed007bfe4ad61a0b9a49206f1148f",
"assets/assets/.git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
"assets/assets/.git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
"assets/assets/.git/objects/fc/e1313a45c70a0a628ec79a621818112041df30": "465569129ba54f8a69d4b449d9268900",
"assets/assets/.git/objects/fd/c759b7388b31d3d62ac30f2030f1f569f12602": "b049930b51b0afd06067b4074c6f4b47",
"assets/assets/.git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "1dfc0ae4480d18f6ff6e8730ef3222d1",
"assets/assets/.git/objects/fe/b25016fb02da68984c7132cf20c5e95988ffb5": "0c3147d4f4daf439db74040a41d7861c",
"assets/assets/.git/objects/ff/41957983fc350db55a01730d1b92354f0498b3": "6ae088d545ee5982c7eabcc6d9a1e68f",
"assets/assets/.git/refs/heads/main": "d33892c2acf1482a6b98525b0630ec09",
"assets/assets/.git/refs/remotes/origin/main": "d33892c2acf1482a6b98525b0630ec09",
"assets/assets/.idea/libraries/Dart_SDK.xml": "5908f8da213a47c73ac34a9ca378cb64",
"assets/assets/.idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
"assets/assets/.idea/modules.xml": "24f0de78efcd4dfb72bce9aebf2cdd02",
"assets/assets/.idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
"assets/assets/.idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"assets/assets/analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"assets/assets/android/app/build.gradle": "2afb4f7b08b835715ffc9a61f2e76182",
"assets/assets/android/app/src/debug/AndroidManifest.xml": "a16a7250e6fc62c02c07d091f4d971fe",
"assets/assets/android/app/src/main/AndroidManifest.xml": "a4053b201547fb12c3d2060162c85d3d",
"assets/assets/android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"assets/assets/android/app/src/main/kotlin/com/example/assets/MainActivity.kt": "fabe83f616f5a30b88e985d15c7538f1",
"assets/assets/android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"assets/assets/android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"assets/assets/android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"assets/assets/android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"assets/assets/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"assets/assets/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"assets/assets/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"assets/assets/android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"assets/assets/android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"assets/assets/android/app/src/profile/AndroidManifest.xml": "a16a7250e6fc62c02c07d091f4d971fe",
"assets/assets/android/assets_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/assets/android/build.gradle": "67eed4949697a1973902a608d7e1caf9",
"assets/assets/android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"assets/assets/android/gradle/wrapper/gradle-wrapper.properties": "1868e63ebbc541e5bbb09fa921ef2349",
"assets/assets/android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"assets/assets/android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"assets/assets/android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"assets/assets/android/local.properties": "eb90b3c0808a674bfe4bc121dd29b59d",
"assets/assets/android/settings.gradle": "b673a8efad7eaed18692f958a191f21a",
"assets/assets/assets.iml": "f9bf5c490675c84d098e6772a6f2a796",
"assets/assets/build/1ff72e3e1cc4b14a39b5647e441b6493/gen_dart_plugin_registrant.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"assets/assets/build/1ff72e3e1cc4b14a39b5647e441b6493/gen_localizations.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"assets/assets/build/1ff72e3e1cc4b14a39b5647e441b6493/_composite.stamp": "436d2f2faeb7041740ee3f49a985d62a",
"assets/assets/build/c075001b96339384a97db4862b8ab8db.cache.dill.track.dill": "50024329ad6e16421d50b19e0a20fd70",
"assets/assets/build/cf81dbb7dee963bedb1148fc66e70128.cache.dill.track.dill": "50024329ad6e16421d50b19e0a20fd70",
"assets/assets/build/flutter_assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/assets/build/flutter_assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/build/flutter_assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/build/flutter_assets/NOTICES": "2ab386df82ec2e99f4d77fa4048f09b1",
"assets/assets/build/flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/build/web/.git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/assets/build/web/.git/config": "b18b14e6e6857aa775972391a523c112",
"assets/assets/build/web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"assets/assets/build/web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"assets/assets/build/web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"assets/assets/build/web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"assets/assets/build/web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"assets/assets/build/web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"assets/assets/build/web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"assets/assets/build/web/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"assets/assets/build/web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"assets/assets/build/web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"assets/assets/build/web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"assets/assets/build/web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"assets/assets/build/web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"assets/assets/build/web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"assets/assets/build/web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"assets/assets/build/web/.git/index": "8bdf8e737c5e6edb701ea264993c2bb8",
"assets/assets/build/web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/assets/build/web/.git/logs/HEAD": "37b0c84f327616290b9dc71c0615b9d9",
"assets/assets/build/web/.git/logs/refs/heads/main": "84a21fc66650bc8df0031a5b70fb5ebd",
"assets/assets/build/web/.git/logs/refs/remotes/origin/main": "ea0351991edf1547cebee4e018220ae6",
"assets/assets/build/web/.git/objects/1a/3ce13cb2a822a09cf743025a5426e25ff28a62": "08a628f8ecd031db01930df0194b64e6",
"assets/assets/build/web/.git/objects/78/6991912e0ea2fa261d29f99178f2f439ab57e1": "d41c78fdad8b47cb8dd3483cbda556e2",
"assets/assets/build/web/.git/objects/9b/d08e19baa960b569ddeb8e3daf9f810cd4a254": "c4d1a323faef4e91c961c517ae3f84ba",
"assets/assets/build/web/.git/refs/heads/main": "dceff9bc214175ee7eaf390264fac133",
"assets/assets/build/web/.git/refs/remotes/origin/main": "dceff9bc214175ee7eaf390264fac133",
"assets/assets/build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/assets/build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/build/web/assets/fonts/MaterialIcons-Regular.otf": "6124df5c7543e211fd42ea954c94c47c",
"assets/assets/build/web/assets/NOTICES": "2ab386df82ec2e99f4d77fa4048f09b1",
"assets/assets/build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/assets/build/web/canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"assets/assets/build/web/canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"assets/assets/build/web/canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"assets/assets/build/web/canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"assets/assets/build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/build/web/flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"assets/assets/build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/assets/build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/assets/build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"assets/assets/build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/assets/build/web/index.html": "0dfc0d40ea97ed86e418d44de68aaee6",
"/": "defd4604e12a7da1a62d565cab9b0d3a",
"assets/assets/build/web/main.dart.js": "b4711e94e9dd44af4716f03e2666518d",
"assets/assets/build/web/manifest.json": "cce3b993b4c31dadb538f512cbba9f0a",
"assets/assets/build/web/README.md": "d6a7b2425feff363e084d5c8e628aa3a",
"assets/assets/build/web/version.json": "38b71418f3a2c9ee89791c955a6911da",
"assets/assets/covers/1.png": "14a9e0c23e551fff39abf12dd437fe30",
"assets/assets/covers/2.png": "c770fd43b8176264d528ba9bfe966f9f",
"assets/assets/covers/3.png": "5e53979d8ab041ff518360149a43316e",
"assets/assets/covers/4.png": "949cb63cbdf5e0199e05b8017bd760d0",
"assets/assets/covers/5.png": "04c03290916de1c0bda59478764de751",
"assets/assets/images/1.jpg": "17fe89a535f2a5e801d3bccab733a8cf",
"assets/assets/images/2.jpg": "5c95a49431deb10f93262356359151f0",
"assets/assets/images/3.jpg": "6538f11974a0259fb3109931a8e62256",
"assets/assets/images/4.jpg": "e9186012634771c4061098bf26df85b5",
"assets/assets/images/5.jpg": "9da16b7b61110fb72b3cd6e0948abc3d",
"assets/assets/images/add-to-cart.png": "a508eed94244e2b7f2de108c0dfcd261",
"assets/assets/images/basket.png": "0439d31a0d97ef85658772c59a31a2ff",
"assets/assets/images/box.png": "a9d988cd6785918680f105ce032970be",
"assets/assets/images/buy-on-laptop.jpg": "d1557d9c94ef76221595ea500f71a380",
"assets/assets/images/buy-through.png": "34ca14b445d917f4bceae592eefe410e",
"assets/assets/images/buyfood.jpg": "51a06e5c5fc43e45b85720ecb0e6edb3",
"assets/assets/images/cake.png": "89c2861c27a510ee30fedf97dad769fd",
"assets/assets/images/cart.png": "9aeb6d9a2d391b4f497a2c1fbf3bdfdd",
"assets/assets/images/co.png": "20faea12da91e052984d907e605b4df9",
"assets/assets/images/cover.png": "92b12029540726fafab744d25c729bc1",
"assets/assets/images/cover1.png": "e423f815c8069529916e2a2daf8f6ef1",
"assets/assets/images/cover2.png": "96cffcf96aa377d8a6a7963aaf039b25",
"assets/assets/images/forgot_screen.png": "89fd6a4c0f41c05d9ba2ce45699eef37",
"assets/assets/images/fruits.png": "029b932f24d07ddc79d2d882145eb33e",
"assets/assets/images/google.png": "805ea02b4ee63422a89180a306905d38",
"assets/assets/images/grains.png": "7e975fcd2891caad6f4f1b17e4c6a934",
"assets/assets/images/grocery-cart.jpg": "14e896dd91d2b62723d1fec471af6380",
"assets/assets/images/history.png": "568003e1948b3e92c5ee88e5a4e37330",
"assets/assets/images/login_screen.png": "6383cea449b5eded450fe8c46eb569e4",
"assets/assets/images/nuts.png": "ca7d8bc0e61fbf649334c868ab08f6e8",
"assets/assets/images/offres/Offer1.jpg": "e003faf963b94b993c593fcd9a58993f",
"assets/assets/images/offres/Offer2.jpg": "5eb7ba48fd511e43196ec24531211e04",
"assets/assets/images/offres/Offer3.jpg": "8aaec90a54f69a895ba66a3768208257",
"assets/assets/images/offres/Offer4.jpg": "dc1c29b9cfcc363de2f6405058c3eb97",
"assets/assets/images/pastry.png": "8eba534ac95316b91225baeb686ddff6",
"assets/assets/images/pattie.png": "c1160bd09322bb4c2921338ccc3e97d4",
"assets/assets/images/pizza.png": "fa3f382ab6026da5e9d581c988a65ef7",
"assets/assets/images/register_screen.png": "f6b5236f7b3f499c3b3d59bbca4224a2",
"assets/assets/images/spices.png": "6b68ef98e50c75c85d73919071e70da4",
"assets/assets/images/Spinach.png": "79a7b7021bbad07f5fff203a95343cec",
"assets/assets/images/store.jpg": "d69f4dd74e30a82fe369b268f9e81279",
"assets/assets/images/sweets.png": "bf72a536ef1263807885ff9cc259823f",
"assets/assets/images/veg.png": "7a58aeb7a4760e23b67a98cb6eaae676",
"assets/assets/images/vegetable.jpg": "1e2b2f2953de346590eedfa51bb37369",
"assets/assets/images/warning-sign.png": "984c47c9fac447b0183fa9c917777a7c",
"assets/assets/images/wishlist.png": "fcbebebb3013f139bb29a961d6624b28",
"assets/assets/ios/Flutter/AppFrameworkInfo.plist": "d82fc62dcd081e420f43e71a31460b73",
"assets/assets/ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"assets/assets/ios/Flutter/flutter_export_environment.sh": "2653568d77aad1c7829d654fdf0d99cc",
"assets/assets/ios/Flutter/Generated.xcconfig": "9502a85cb64e37ebfaf6fa658a29b45d",
"assets/assets/ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"assets/assets/ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"assets/assets/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"assets/assets/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"assets/assets/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/assets/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/assets/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"assets/assets/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"assets/assets/ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"assets/assets/ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"assets/assets/ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"assets/assets/ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"assets/assets/ios/Runner/Info.plist": "42571446491d0421509664463c1fde00",
"assets/assets/ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"assets/assets/ios/Runner.xcodeproj/project.pbxproj": "9b8ccfcccd6d8386ff8fccda52f523bb",
"assets/assets/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"assets/assets/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"assets/assets/ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"assets/assets/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "a2a9ff0301515ab26224e3aea457b300",
"assets/assets/ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"assets/assets/ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"assets/assets/ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"assets/assets/ios/RunnerTests/RunnerTests.swift": "24e5d095048eb86c30423f4e04b6e57b",
"assets/assets/lib/main.dart": "ae762add294346fa6a4cf193d30dd8bd",
"assets/assets/linux/CMakeLists.txt": "bab91832a3830fdcea7744046efb2183",
"assets/assets/linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"assets/assets/linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"assets/assets/linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"assets/assets/linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"assets/assets/linux/main.cc": "539395bcd63dba20afed0838d136189f",
"assets/assets/linux/my_application.cc": "5af8d8b1d107b6b2044336be7d802af8",
"assets/assets/linux/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"assets/assets/macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "8cf8b4725ea525c784b4afb55b908026",
"assets/assets/macos/Flutter/ephemeral/flutter_export_environment.sh": "31a39b6dd375d65d3cb81b0df0443b5e",
"assets/assets/macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"assets/assets/macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"assets/assets/macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"assets/assets/macos/Runner/AppDelegate.swift": "f35757566ef1832592cec47b89197f94",
"assets/assets/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"assets/assets/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"assets/assets/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"assets/assets/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"assets/assets/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"assets/assets/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"assets/assets/macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"assets/assets/macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"assets/assets/macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"assets/assets/macos/Runner/Configs/AppInfo.xcconfig": "02caca94bacb2fe0d66c95a1b5663983",
"assets/assets/macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"assets/assets/macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"assets/assets/macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"assets/assets/macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"assets/assets/macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"assets/assets/macos/Runner/MainFlutterWindow.swift": "25da60ddd7c7148c2a40dc3194b8ddca",
"assets/assets/macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"assets/assets/macos/Runner.xcodeproj/project.pbxproj": "a85c85648bf905c1b7e9f85f20bb103f",
"assets/assets/macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"assets/assets/macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "2afbd464c145a6dde65a486d33cbd792",
"assets/assets/macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"assets/assets/macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"assets/assets/macos/RunnerTests/RunnerTests.swift": "491b4028786d09d80b109a6d3d775ef6",
"assets/assets/pubspec.lock": "07dabe6bd33e101e2d281b45481a96d6",
"assets/assets/pubspec.yaml": "c917c291c2adc844cac42bd63ddc1e69",
"assets/assets/README.md": "f99b9d1283d629ea331654b221412aff",
"assets/assets/splash.mp4": "f81f0930a2e5f4bd8dc9fc641674ea33",
"assets/assets/test/widget_test.dart": "8a805095665a5ec946a4f489dd334dd9",
"assets/assets/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/assets/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/assets/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"assets/assets/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/assets/web/index.html": "cb215695241f41962a9f8854e9044994",
"assets/assets/web/manifest.json": "cce3b993b4c31dadb538f512cbba9f0a",
"assets/assets/windows/CMakeLists.txt": "9fc1b0b7048117517c22a5dafdf1b886",
"assets/assets/windows/flutter/CMakeLists.txt": "82c70875775d10a82c7e2c3e9453a26d",
"assets/assets/windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"assets/assets/windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"assets/assets/windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"assets/assets/windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"assets/assets/windows/runner/flutter_window.cpp": "9a0919fae6ddd9ffd2d7bae0e946b01e",
"assets/assets/windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"assets/assets/windows/runner/main.cpp": "749b91bab2afd9c311e65c9907cde50c",
"assets/assets/windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"assets/assets/windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"assets/assets/windows/runner/runner.exe.manifest": "cd3aafe81b2f278dffaf305373ee30b4",
"assets/assets/windows/runner/Runner.rc": "4dae048c1b5367d081921e596d1697fc",
"assets/assets/windows/runner/utils.cpp": "892a92c75eb6291ca11f62b44ea4d16b",
"assets/assets/windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"assets/assets/windows/runner/win32_window.cpp": "7f39d74c653ac062929cf828a595eab1",
"assets/assets/windows/runner/win32_window.h": "30adb9dcb18f5cad39278e6bb44d42a7",
"assets/FontManifest.json": "1c177f69de6256135941857b3cebf901",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d45ab6ed8d87368de5b16e287e7d895e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "541df649654f074a25833daa64e246f3",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "25d014c0a013024ffb898071af3bff6c",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "20ae062785ef7ebe5d2eaaf4ddbb8e3a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "defd4604e12a7da1a62d565cab9b0d3a",
"main.dart.js": "fc0d6ddbce8826209f3600b6d442b049",
"manifest.json": "17e671a3197528c5be4efbc158a2eca1",
"version.json": "27437deda4c65460f51efdf9263587a0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
