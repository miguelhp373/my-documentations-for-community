# How To Generated SHA1 and SHA256 For My Android Project

```powershell

cd C:\Program Files\Android\Android Studio\jre\bin

keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android

```

## Result in Portuguese

```
C:\Program Files\Android\Android Studio\jre\bin>keytool -list -v -keystore "%USERPROFILE%\.android\debug.keystore" -alias androiddebugkey -storepass android -keypass android
Nome do alias: androiddebugkey
Data de criação: 21 de jun de 2021
Tipo de entrada: PrivateKeyEntry
Comprimento da cadeia de certificados: 1
Certificado[1]:
Proprietário: C=US, O=Android, CN=Android Debug
Emissor: C=US, O=Android, CN=Android Debug
Número de série: 1
Válido de: Mon Jun 21 20:49:56 BRT 2021 até: Wed Jun 14 20:49:56 BRT 2051
Fingerprints do certificado:
         SHA1: A9:68:82:73:AB:40:DB:2A:45:F9:ED:5A:DE:1A:62:5F:39:32:EE:E8
         SHA256: 9E:49:86:7E:99:08:EC:D8:92:0E:56:E1:1A:B8:80:5C:5B:C8:99:BA:8D:6F:86:05:C3:AE:53:EC:95:29:83:DE
Nome do algoritmo de assinatura: SHA1withRSA
Algoritmo de Chave Pública do Assunto: Chave RSA de 2048 bits
Versão: 1

```