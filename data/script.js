var myurl;
var pathname;
var xhr;
var json;
const port = 3000;
const hostname = `http://localhost:${port}`;

function buttonOn(button) {
 if (button == 1) {
    json = {
      relay: 1,
    };
  } else if (button == 2) {
    json = {
      relay: 2,
    };
  } else if (button == 3) {
    json = {
      relay: 3,
    };
  } else if (button == 4) {
    json = {
      relay: 4,
    };
  }
  pathname = "/relayOn";
  myurl = new URL(pathname, hostname);
  xhr = new XMLHttpRequest();
  xhr.open("POST", myurl.href, true);
  xhr.responseType = "text";
  xhr.send(JSON.stringify(json));
}
function buttonOff(button) {
  if (button == 1) {
    json = {
      relay: 1,
    };
  } else if (button == 2) {
    json = {
      relay: 2,
    };
  } else if (button == 3) {
    json = {
      relay: 3,
    };
  } else if (button == 4) {
    json = {
      relay: 4,
    };
  }
  pathname = "/relayOff";
  myurl = new URL(pathname, hostname);
  xhr = new XMLHttpRequest();
  xhr.open("POST", myurl.href, true);
  xhr.responseType = "text";
  xhr.send(JSON.stringify(json));
}
// function loaddata() {
//   pathname = "/detailcp/loaddata";
//   myurl = new URL(pathname, hostname);
//   // alert(myurl.toString());
//   var xhr = new XMLHttpRequest();
//   //xhr.withCredentials = true;
//   xhr.open("GET", myurl.href, true); //send request to server which process dbase
//   xhr.responseType = "text";
//   xhr.send();
//   xhr.onload = function () {
//     //alert(xhr.responseText);
//     let temparray = JSON.parse(xhr.responseText);
//     document.getElementById("endpoint").value = temparray[0].endpointurl;
//     document.getElementById("cbid").value = temparray[0].chargeboxid;
//     document.getElementById("cbsn").value = temparray[0].cboxnum; //instal extension CORS and activate it at google chrome, so can be cross domain!!
//     document.getElementById("cpmodel").value = temparray[0].cpmodel;
//     document.getElementById("cpsn").value = temparray[0].cpnum;
//     document.getElementById("cpvendor").value = temparray[0].cpvendor;
//     document.getElementById("fwversion").value = temparray[0].fwversion;
//     document.getElementById("iccid").value = temparray[0].iccid;
//     document.getElementById("imsi").value = temparray[0].imsi;
//     document.getElementById("metersn").value = temparray[0].metersn;
//     document.getElementById("metertype").value = temparray[0].metertype;
//     document.getElementById("currentlimit").value = temparray[0].currentlimit;
//   };
// }
// function savedata() {
//   var endpoint = document.getElementById("endpoint").value;
//   var cbid = document.getElementById("cbid").value;
//   var cbsn = document.getElementById("cbsn").value;
//   var cpmodel = document.getElementById("cpmodel").value;
//   var cpsn = document.getElementById("cpsn").value;
//   var cpvendor = document.getElementById("cpvendor").value;
//   var fwversion = document.getElementById("fwversion").value;
//   var iccid = document.getElementById("iccid").value;
//   var imsi = document.getElementById("imsi").value;
//   var metersn = document.getElementById("metersn").value;
//   var metertype = document.getElementById("metertype").value;
//   var currentlimit = document.getElementById("currentlimit").value;
//   let json = JSON.stringify({
//     endpoint: endpoint,
//     cbid: cbid,
//     cbsn: cbsn,
//     cpmodel: cpmodel,
//     cpsn: cpsn,
//     cpvendor: cpvendor,
//     fwversion: fwversion,
//     iccid: iccid,
//     imsi: imsi,
//     metersn: metersn,
//     metertype: metertype,
//     currentlimit: currentlimit,
//   });

//   pathname = "/detailcp/savedata";
//   myurl = new URL(pathname, hostname);
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", myurl.href, true);
//   xhr.responseType = "text";
//   xhr.send(json);
// }

// function GetConfiguration() {
//   pathname = "/configcp/getconfiguration";
//   myurl = new URL(pathname, hostname);
//   // alert(myurl.toString());
//   var xhr = new XMLHttpRequest();
//   //xhr.withCredentials = true;
//   xhr.open("GET", myurl.href, true); //send request to server which process dbase
//   xhr.responseType = "text";
//   xhr.send();
//   xhr.onload = function () {
//     //alert(xhr.responseText);
//     let temparray = JSON.parse(xhr.responseText);

//     document.getElementById("GetConfigurationMaxKeys").value =
//       temparray[0].GetConfigurationMaxKeys;
//     document.getElementById("MeterValuesAlignedDataMaxLength").value =
//       temparray[0].MeterValuesAlignedDataMaxLength;
//     document.getElementById("MeterValuesSampledDataMaxLength").value =
//       temparray[0].MeterValuesSampledDataMaxLength;
//     document.getElementById("NumberOfConnectors").value =
//       temparray[0].NumberOfConnectors;
//     document.getElementById("ConnectorPhaseRotationMaxLength").value =
//       temparray[0].ConnectorPhaseRotationMaxLength;
//     document.getElementById("StopTxnAlignedDataMaxLength").value =
//       temparray[0].StopTxnAlignedDataMaxLength;
//     document.getElementById("StopTxnSampledDataMaxLength").value =
//       temparray[0].StopTxnSampledDataMaxLength;
//     document.getElementById("SupportedFeatureProfilesMaxLength").value =
//       temparray[0].SupportedFeatureProfilesMaxLength;
//     document.getElementById("LocalAuthListMaxLength").value =
//       temparray[0].LocalAuthListMaxLength;
//     document.getElementById("SendLocalListMaxLength").value =
//       temparray[0].SendLocalListMaxLength;
//     document.getElementById("ReserveConnectorZeroSupported").value =
//       temparray[0].ReserveConnectorZeroSupported;
//     document.getElementById("ChargeProfileMaxStackLevel").value =
//       temparray[0].ChargeProfileMaxStackLevel;
//     document.getElementById("ChargingScheduleAllowedChargingRateUnit").value =
//       temparray[0].ChargingScheduleAllowedChargingRateUnit;
//     document.getElementById("ChargingScheduleMaxPeriods").value =
//       temparray[0].ChargingScheduleMaxPeriods;
//     document.getElementById("ConnectorSwitch3to1PhaseSupported").value =
//       temparray[0].ConnectorSwitch3to1PhaseSupported;
//     document.getElementById("MaxChargingProfilesInstalled").value =
//       temparray[0].MaxChargingProfilesInstalled;
//   };
// }
// function ReadConfiguration() {
//   pathname = "/configcp/readconfiguration";
//   myurl = new URL(pathname, hostname);
//   // alert(myurl.toString());
//   var xhr = new XMLHttpRequest();
//   //xhr.withCredentials = true;
//   xhr.open("GET", myurl.href, true); //send request to server which process dbase
//   xhr.responseType = "text";
//   xhr.send();
//   xhr.onload = function () {
//     //alert(xhr.responseText);
//     let temparray = JSON.parse(xhr.responseText);

//     if (temparray[0].AllowOfflineTxForUnknownId == 1) {
//       document.getElementById("AllowOfflineTxForUnknownId").value = "true";
//     } else if (temparray[0].AllowOfflineTxForUnknownId == 0) {
//       document.getElementById("AllowOfflineTxForUnknownId").value = "false";
//     }
//     if (temparray[0].AuthorizationCacheEnabled == 1) {
//       document.getElementById("AuthorizationCacheEnabled").value = "true";
//     } else if (temparray[0].AuthorizationCacheEnabled == 0) {
//       document.getElementById("AuthorizationCacheEnabled").value = "false";
//     }
//     if (temparray[0].AuthorizeRemoteTxRequests == 1) {
//       document.getElementById("AuthorizeRemoteTxRequests").value = "true";
//     } else if (temparray[0].AuthorizeRemoteTxRequests == 0) {
//       document.getElementById("AuthorizeRemoteTxRequests").value = "false";
//     }
//     document.getElementById("BlinkRepeat").value = temparray[0].BlinkRepeat;
//     document.getElementById("ClockAlignedDataInterval").value =
//       temparray[0].ClockAlignedDataInterval;
//     document.getElementById("ConnectionTimeOut").value =
//       temparray[0].ConnectionTimeOut;
//     document.getElementById("HeartbeatInterval").value =
//       temparray[0].HeartbeatInterval;
//     document.getElementById("LightIntensity").value =
//       temparray[0].LightIntensity;
//     if (temparray[0].LocalAuthListEnabled == 1) {
//       document.getElementById("LocalAuthListEnabled").value = "true";
//     } else if (temparray[0].LocalAuthListEnabled == 0) {
//       document.getElementById("LocalAuthListEnabled").value = "false";
//     }
//     if (temparray[0].LocalAuthorizeOffline == 1) {
//       document.getElementById("LocalAuthorizeOffline").value = "true";
//     } else if (temparray[0].LocalAuthorizeOffline == 0) {
//       document.getElementById("LocalAuthorizeOffline").value = "false";
//     }
//     if (temparray[0].LocalPreAuthorize == 1) {
//       document.getElementById("LocalPreAuthorize").value = "true";
//     } else if (temparray[0].LocalPreAuthorize == 0) {
//       document.getElementById("LocalPreAuthorize").value = "false";
//     }
//     document.getElementById("MaxEnergyOnInvalidId").value =
//       temparray[0].MaxEnergyOnInvalidId;
//     document.getElementById("MeterValuesAlignedData").value =
//       temparray[0].MeterValuesAlignedData;
//     document.getElementById("MeterValuesSampledData").value =
//       temparray[0].MeterValuesSampledData;
//     document.getElementById("MeterValueSampleInterval").value =
//       temparray[0].MeterValueSampleInterval;
//     document.getElementById("MinimumStatusDuration").value =
//       temparray[0].MinimumStatusDuration;
//     document.getElementById("ResetRetries").value = temparray[0].ResetRetries;
//     document.getElementById("ConnectorPhaseRotation").value =
//       temparray[0].ConnectorPhaseRotation;
//     if (temparray[0].StopTransactionOnEVSideDisconnect == 1) {
//       document.getElementById("StopTransactionOnEVSideDisconnect").value =
//         "true";
//     } else if (temparray[0].StopTransactionOnEVSideDisconnect == 0) {
//       document.getElementById("StopTransactionOnEVSideDisconnect").value =
//         "false";
//     }
//     if (temparray[0].StopTransactionOnInvalidId == 1) {
//       document.getElementById("StopTransactionOnInvalidId").value = "true";
//     } else if (temparray[0].StopTransactionOnInvalidId == 0) {
//       document.getElementById("StopTransactionOnInvalidId").value = "false";
//     }
//     document.getElementById("StopTxnAlignedData").value =
//       temparray[0].StopTxnAlignedData;
//     document.getElementById("StopTxnSampledData").value =
//       temparray[0].StopTxnSampledData;
//     document.getElementById("TransactionMessageAttempts").value =
//       temparray[0].TransactionMessageAttempts;
//     document.getElementById("TransactionMessageRetryInterval").value =
//       temparray[0].TransactionMessageRetryInterval;
//     if (temparray[0].UnlockConnectorOnEVSideDisconnect == 1) {
//       document.getElementById("UnlockConnectorOnEVSideDisconnect").value =
//         "true";
//     } else if (temparray[0].UnlockConnectorOnEVSideDisconnect == 0) {
//       document.getElementById("UnlockConnectorOnEVSideDisconnect").value =
//         "false";
//     }

//     document.getElementById("WebSocketPingInterval").value =
//       temparray[0].WebSocketPingInterval;
//     document.getElementById("savedIdToken").value = temparray[0].IdToken;
//     document.getElementById("lastTagIdToken").value =
//       temparray[0].LastTagIdToken;
//   };
// }
// function ChangeConfiguration() {
//   var AllowOfflineTxForUnknownId = document.getElementById(
//     "AllowOfflineTxForUnknownId"
//   ).value;
//   var AuthorizationCacheEnabled = document.getElementById(
//     "AuthorizationCacheEnabled"
//   ).value;
//   var AuthorizeRemoteTxRequests = document.getElementById(
//     "AuthorizeRemoteTxRequests"
//   ).value;
//   var BlinkRepeat = document.getElementById("BlinkRepeat").value;
//   var ClockAlignedDataInterval = document.getElementById(
//     "ClockAlignedDataInterval"
//   ).value;
//   var ConnectionTimeOut = document.getElementById("ConnectionTimeOut").value;
//   var HeartbeatInterval = document.getElementById("HeartbeatInterval").value;
//   var LightIntensity = document.getElementById("LightIntensity").value;
//   var LocalAuthListEnabled = document.getElementById(
//     "LocalAuthListEnabled"
//   ).value;
//   var LocalAuthorizeOffline = document.getElementById(
//     "LocalAuthorizeOffline"
//   ).value;
//   var LocalPreAuthorize = document.getElementById("LocalPreAuthorize").value;
//   var MaxEnergyOnInvalidId = document.getElementById(
//     "MaxEnergyOnInvalidId"
//   ).value;
//   var MeterValuesAlignedData = document.getElementById(
//     "MeterValuesAlignedData"
//   ).value;
//   var MeterValuesSampledData = document.getElementById(
//     "MeterValuesSampledData"
//   ).value;
//   var MeterValueSampleInterval = document.getElementById(
//     "MeterValueSampleInterval"
//   ).value;
//   var MinimumStatusDuration = document.getElementById(
//     "MinimumStatusDuration"
//   ).value;
//   var ResetRetries = document.getElementById("ResetRetries").value;
//   var ConnectorPhaseRotation = document.getElementById(
//     "ConnectorPhaseRotation"
//   ).value;
//   var StopTransactionOnEVSideDisconnect = document.getElementById(
//     "StopTransactionOnEVSideDisconnect"
//   ).value;
//   var StopTransactionOnInvalidId = document.getElementById(
//     "StopTransactionOnInvalidId"
//   ).value;
//   var StopTxnAlignedData = document.getElementById("StopTxnAlignedData").value;
//   var StopTxnSampledData = document.getElementById("StopTxnSampledData").value;
//   var TransactionMessageAttempts = document.getElementById(
//     "TransactionMessageAttempts"
//   ).value;
//   var TransactionMessageRetryInterval = document.getElementById(
//     "TransactionMessageRetryInterval"
//   ).value;
//   var UnlockConnectorOnEVSideDisconnect = document.getElementById(
//     "UnlockConnectorOnEVSideDisconnect"
//   ).value;
//   var WebSocketPingInterval = document.getElementById(
//     "WebSocketPingInterval"
//   ).value;
//   var IdToken = document.getElementById("savedIdToken").value;
//   let json = JSON.stringify({
//     AllowOfflineTxForUnknownId: AllowOfflineTxForUnknownId,
//     AuthorizationCacheEnabled: AuthorizationCacheEnabled,
//     AuthorizeRemoteTxRequests: AuthorizeRemoteTxRequests,
//     BlinkRepeat: BlinkRepeat,
//     ClockAlignedDataInterval: ClockAlignedDataInterval,
//     ConnectionTimeOut: ConnectionTimeOut,
//     HeartbeatInterval: HeartbeatInterval,
//     LightIntensity: LightIntensity,
//     LocalAuthListEnabled: LocalAuthListEnabled,
//     LocalAuthorizeOffline: LocalAuthorizeOffline,
//     LocalPreAuthorize: LocalPreAuthorize,
//     MaxEnergyOnInvalidId: MaxEnergyOnInvalidId,
//     MeterValuesAlignedData: MeterValuesAlignedData,
//     MeterValuesSampledData: MeterValuesSampledData,
//     MeterValueSampleInterval: MeterValueSampleInterval,
//     MinimumStatusDuration: MinimumStatusDuration,
//     ResetRetries: ResetRetries,
//     ConnectorPhaseRotation: ConnectorPhaseRotation,
//     StopTransactionOnEVSideDisconnect: StopTransactionOnEVSideDisconnect,
//     StopTransactionOnInvalidId: StopTransactionOnInvalidId,
//     StopTxnAlignedData: StopTxnAlignedData,
//     TransactionMessageAttempts: TransactionMessageAttempts,
//     TransactionMessageRetryInterval: TransactionMessageRetryInterval,
//     UnlockConnectorOnEVSideDisconnect: UnlockConnectorOnEVSideDisconnect,
//     WebSocketPingInterval: WebSocketPingInterval,
//     IdToken: IdToken,
//   });

//   pathname = "/configcp/changeconfiguration";
//   myurl = new URL(pathname, hostname);
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", myurl.href, true);
//   xhr.responseType = "text";
//   xhr.send(json);
//   alert("Configuration saved!!");
// }
