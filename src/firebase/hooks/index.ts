/* eslint-disable import/prefer-default-export */
import { useState, useEffect } from 'react';
import {
  collection, query, onSnapshot, doc, updateDoc,
} from 'firebase/firestore';
import { db } from '../config';
import { computeStatus } from '../../functions/status';
import { Spot } from '../../types';

export const useGetFirestore = (coll: string) => {
  const [data, setData] = useState<Spot[]>([]);
  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(db, coll));
    onSnapshot(q, (querySnapshot) => {
      setData(querySnapshot.docs.map((d) => ({
        id: d.data().id,
        name: d.data().name,
        area: d.data().area,
        coords: d.data().coords,
        quality: {
          ...d.data().quality,
        },
        status: d.data().status,
        votes: d.data().votes,
        bySearch: false,
      })));
    });
  }, []);
  return data;
};

export const setFirestore = async (coll: any, data: any, spot: any) => {
  const docRef = doc(db, coll, data?.id);
  try {
    await updateDoc(docRef, {
      id: spot?.id,
      quality: computeStatus(data.quality, spot?.votes)
        ? data.quality
        : (!data.quality?.water && !data.quality?.plastic && !data.quality?.seal)
          ? data.quality : spot.quality,
      votes: [...spot?.votes, data.quality],
      status: computeStatus(data.quality, spot?.votes)
        ? true
        // eslint-disable-next-line no-unneeded-ternary
        : (!data.quality?.water
          && !data.quality?.plastic
          && !data.quality?.seal) ? false : false,
    });
  } catch (err) {
    // eslint-disable-next-line no-alert
    alert(err);
  }
};
