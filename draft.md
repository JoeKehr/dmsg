

📌 Introduction

This project is a decentralized messaging application, allowing you to send and receive messages without relying on a centralized infrastructure.
It's providing end-to-end encryption and uses a implémentation similar to DHT (Distributed Hash Table) to store and share messages.

✨ Fonctionnalités

🔐 Chiffrement de bout en bout des messages

📡 Transmission sur un réseau décentralisé

🔄 Stockage temporaire des messages sur plusieurs nœuds lorsque le destinataire est hors ligne

🔎 Mise à jour dynamique des adresses IP dans les tables de routage lors de la reconnexion

🔑 Récupération du compte via une Seed Phrase et un mot de passe 

📂 Support des messages texte



🔧 Architecture

Le système repose sur les éléments suivants :

1. Custom implémentation of DHT (Distributed Hash Table) :

Chaque nœud stocke une table de routage des autres nœuds actifs.

Les messages sont stockés temporairement sur plusieurs nœuds en attendant la réception par le destinataire.



2. Gestion des Messages :

Lorsqu'un utilisateur envoie un message, il est chiffré avec la clé secrète partagée avec le destinataire.

Le message est ensuite diffusé sur plusieurs nœuds jusqu'à ce que le destinataire le récupère.

Une fois reçu, le message est supprimé des nœuds intermédiaires.



3. Mise à Jour des Adresses IP :

Lors de la reconnexion d’un nœud, il met à jour son IP et la propage aux nœuds voisins.




🔐 Algorithmes Cryptographiques

Chiffrement :

Échange de clés : ECDH (Curve25519)


Hachage :

SHA-256 pour les identifiants uniques des messages


🚀 Installation

Prérequis

Node.js (version 18+ recommandée)

NPM

Bibliothèques cryptographiques (libsodium, OpenPGP.js, crypto)


🛠 API

📩 Envoi d'un message

POST /send
{
  "to": "clé_publique_destinataire",
  "message": "Message chiffré en base64"
}

📥 Récupération des messages

GET /receive
{
  "messages": [
    {
      "from": "clé_publique_envoyeur",
      "message": "Message chiffré en base64",
      "timestamp": "2025-02-19T12:34:56Z"
    }
  ]
}


