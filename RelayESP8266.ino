#include <ESP8266HTTPClient.h>
#include <Wire.h>
#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <WiFiClientSecure.h>

//wifi ssid and password
const char* ssid = "Handipo";
const char* password = "12345678";

const long interval = 5000;
unsigned long previousMillis = 0;

//create WiFiClient instance
//WiFiClient client;
WiFiClientSecure *client = new WiFiClientSecure;
//create HTTPClient instance
HTTPClient http;

//server name
const char* serverName = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Surabaya?unitGroup=metric&key=FZYD7TUQ4ZP7PDQVUFL9WE6Q5&contentType=json";
//const char* serverName = "https://347d-36-68-222-14.ngrok-free.app/hello";
//http variable
int httpCode;

void setup() {
  //connect to wifi
  Serial.begin(9600);
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.mode(WIFI_STA);//set mode as station (not access point)
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}
void loop() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    if (WiFi.status() == WL_CONNECTED) {
      //do these below while wifi in connection
      Serial.print("[HTTP] begin...\n");
      client->setInsecure();
      if (http.begin(*client,serverName)) { //connect client to server using http protocol
        Serial.println("Client connected to server");
        Serial.print("[HTTP] GET...\n");
        httpCode = http.GET();//send http request get
        //if error httpCode will be negative value
        if (httpCode > 0) { //no error
          Serial.printf("[HTTP] GET... code: %d\n", httpCode);
        //  if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
            String payload = http.getString();
            Serial.println(payload);

         // }
        }
        else {//if http error
          Serial.printf("[HTTP] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
        }
        http.end();//ended http
      }
      else {
        Serial.println("[HTTP] Unable to connect");
      }
      previousMillis = currentMillis;
    }
    else {
      Serial.println("WiFi Disconnected");//wifi disconnect
    }

  }
}
