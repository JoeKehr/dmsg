📌 Introduction

This project is a decentralized messaging application, allowing you to send and receive messages without relying on a centralized infrastructure.
It's providing end-to-end encryption and uses an implementation similar to DHT (Distributed Hash Table) to store and share messages.


✨ Features

- 🔐 End-to-end encryption of the messages

- 📡 Transmission on a decentralized network

- 🔄 Messages are temporarily stored on multiple nodes while recipient is offline

- 🔎 Dynamic update of the routing tables by updating IP addresses and ports when reconnecting

- 🔑 Retrieve account with Seed Phrase and Password

- 📂 Supports only text messages (for now)



🔧 Architecture

System relies on these following elements  :

1. Custom implementation of DHT (Distributed Hash Table) :

    Each node stores a routing table listing IP/Ports of other nodes.

    Messages are temporarily stored on multiple nodes waiting reception by the receiver.



2. Handling Messages :

    When a user sends a message, it is encrypted using a shared key between the sender and the receiver.

    The message is then sent to several nodes hopping until receiver gets it.

    Once message reaches final destination, it is removed from intermediary nodes.



3. Updating IP addresses :

   When a node is reconnecting, it uses hole punching via another known node to get its own IP/Port and spreads the information to other known nodes.


🔐 Cryptographic Algorithms

- Encryption :
  - Shared Key : ECDH (Curve25519)
  - Symmetric encryption : AES-256-cbc
- Hashing :
  - SHA-256 (or UUID?) for unique identifier of message