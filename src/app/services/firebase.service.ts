import { Injectable } from '@angular/core';
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { getDatabase, ref, push, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firestore = getFirestore(initializeApp(environment.firebaseConfig));
  private realtimeDb = getDatabase(initializeApp(environment.firebaseConfig));

  constructor() {
  }

  // Firestore: Adicionar produto
  addProduto(produto: any): Promise<any> {
    return addDoc(collection(this.firestore, 'produtos'), produto);
  }

  // Firestore: Obter todos os produtos
  getProdutos(): Promise<any> {
    const produtosRef = collection(this.firestore, 'produtos');
    return getDocs(produtosRef).then(querySnapshot => {
      return querySnapshot.docs.map(doc => ({
        id: doc.id, ...doc.data()
      }));
    });
  }

  // Realtime Database: Adicionar produto
  async addProdutoRealtime(produto: any): Promise<any> {
    return push(ref(this.realtimeDb, 'produtos'), produto);
  }

  // Realtime Database: Obter todos os produtos
  async getProdutosRealtime(): Promise<any> {
    return get(ref(this.realtimeDb, 'produtos'));
  }
}
