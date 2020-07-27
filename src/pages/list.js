import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function List({ ownersList }) {

  console.log(ownersList)

  // const [owners, setOwners] = useState([]);
  // useEffect(() => {

  //   async function loadData() {
  //     const response = await fetch('http://localhost:4001/vehicles');
  //     const ownerList = await response.json();
  //     setOwners(ownerList);
  //   }

  //   loadData()
  // }, []);


  return (
    <div>
      {ownersList.map((e, index) => (
        <div key={index}>
          <Link as={`/${e.vehicle}/${e.ownerName}`} href="/[vehicle]/[person]">
            <a>Navigate to {e.ownerName}'s {e.vehicle}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}

List.getInitialProps = async () => {
  const response = await fetch('http://localhost:4001/vehicles');
  const ownerList = await response.json();
  return { ownersList: ownerList }
}