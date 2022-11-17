import { useState, useEffect } from 'react';
import {
  collection, query, onSnapshot,
} from 'firebase/firestore';
import { db } from '../config';
import { Spot } from '../../features/getSpotsSlice';

const useFirestore = (coll: string) => {
  const [data, setData] = useState<Spot[]>([]);
  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, coll));
    onSnapshot(q, (querySnapshot) => {
      setData(querySnapshot.docs.map((doc) => ({
        id: doc.data().id,
        name: doc.data().name,
        area: doc.data().area,
        coords: doc.data().coords,
        quality: {
          ...doc.data().quality,
        },
        status: doc.data().status,
        votes: doc.data().votes,
        bySearch: false,
      })));
    });
  }, []);
  return data;
};

export default useFirestore;
