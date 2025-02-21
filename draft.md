

📌 Introduction

This project is a decentralized messaging application, allowing you to send and receive messages without relying on a centralized infrastructure.
It's providing end-to-end encryption and uses a implémentation similar to DHT (Distributed Hash Table) to store and share messages.

✨ Fonctionnalités

🔐 Chiffrement de bout en bout des messages avec des clés asymétriques

📡 Transmission sur un réseau décentralisé via une DHT

🔄 Stockage temporaire des messages sur plusieurs nœuds lorsque le destinataire est hors ligne

🔎 Mise à jour dynamique des adresses IP dans les tables de routage lors de la reconnexion

🔑 Récupération des messages via une Seed Phrase

📂 Support des messages texte, fichiers et vidéos

📡 Intégration avec un réseau HF/VHF/UHF Mesh pour les communications résilientes


🔧 Architecture

Le système repose sur les éléments suivants :

1. DHT (Distributed Hash Table) :

Chaque nœud stocke une table de routage des autres nœuds actifs.

Les messages sont stockés temporairement sur plusieurs nœuds en attendant la réception par le destinataire.



2. Gestion des Messages :

Lorsqu'un utilisateur envoie un message, il est chiffré avec la clé publique du destinataire.

Le message est ensuite diffusé sur plusieurs nœuds jusqu'à ce que le destinataire le récupère.

Une fois reçu, le message est supprimé des nœuds intermédiaires.



3. Mise à Jour des Adresses IP :

Lors de la reconnexion d’un nœud, il met à jour son IP et la propage aux nœuds voisins.




🔐 Algorithmes Cryptographiques

Chiffrement Asymétrique :

Échange de clés : ECDH (Curve25519)

Signatures numériques : Ed25519


Chiffrement Symétrique :

AES-256 pour le chiffrement des messages après l’échange de clés


Hachage :

SHA-256 pour les identifiants uniques des messages


🚀 Installation

Prérequis

Node.js (version 18+ recommandée)

NPM ou Yarn

Bibliothèques cryptographiques (libsodium, OpenPGP.js, crypto)


Étapes d’installation

# Cloner le dépôt
git clone https://github.com/utilisateur/messagerieE2E.git
cd messagerieE2E

# Installer les dépendances
npm install

# Démarrer le service
pm start

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

🔄 Contribution

1. Forker le projet


2. Créer une branche (feature/nom_de_la_fonctionnalité)


3. Committer vos modifications


4. Envoyer une Pull Request



📜 Licence

Ce projet est sous licence MIT.


---

🚀 Projet en cours de développement - toute contribution est bienvenue !

