# The Graph Subgraph untuk Music NFT Marketplace

Repositori ini berisi konfigurasi dan kode sumber untuk subgraph yang digunakan dalam proyek Music NFT Marketplace. Subgraph ini memungkinkan pengindeksan dan kueri data blockchain secara efisien menggunakan protokol [The Graph](https://thegraph.com/).

## 🧾 Deskripsi

Subgraph ini dirancang untuk mengindeks data dari smart contract terkait NFT musik, seperti informasi tentang koleksi, kepemilikan, dan transaksi. Dengan menggunakan subgraph, aplikasi dapat melakukan kueri data blockchain dengan cepat dan efisien melalui GraphQL.

## 📁 Struktur Direktori

- `abis/`: Berisi file ABI (Application Binary Interface) dari smart contract yang digunakan.
- `src/`: Kode sumber handler untuk event blockchain yang akan diindeks.
- `tests/`: Skrip pengujian untuk memastikan subgraph berfungsi dengan benar.
- `schema.graphql`: Skema GraphQL yang mendefinisikan struktur data yang akan diindeks.
- `subgraph.yaml`: Konfigurasi subgraph, termasuk sumber data dan mapping handler.
- `networks.json`: Informasi jaringan blockchain yang digunakan.
- `docker-compose.yml`: Konfigurasi untuk menjalankan lingkungan pengembangan lokal menggunakan Docker.

## 🚀 Menjalankan Secara Lokal

1. **Prasyarat**:
   - [Node.js](https://nodejs.org/).

2. **Kloning Repositori**:
   ```bash
   git clone https://github.com/IvanLeovandi/the-graph.git
   cd the-graph
