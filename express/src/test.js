function filterArrays(listNew, listDelete) {
    // Membuat objek untuk menyimpan hasil akhir
    const listResult = [];
  
    // Menggunakan objek untuk melacak status setiap item berdasarkan ID
    const statusMap = {};
  
    // Menambahkan item dari listNew dengan status 'create'
    listNew.forEach((item) => {
      const id = item.id;
      listResult.push({ ...item, status: 'create' });
      statusMap[id] = 'create';
    });
  
    // Menambahkan item dari listDelete jika belum ada di listResult
    listDelete.forEach((item) => {
      const id = item.id;
      if (!statusMap[id]) {
        listResult.push({ ...item, status: 'delete' });
        statusMap[id] = 'delete';
      }
    });
  
    return listResult;
  }
  
  // Contoh penggunaan:
  const listNew = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  
  const listDelete = [
    { id: 2, name: 'Item 2' },
    { id: 4, name: 'Item 4' },
  ];
  
  const result = filterArrays(listNew, listDelete);
  console.log(result);
  