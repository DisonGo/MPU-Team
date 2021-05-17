arr = [
    {
      "ID": "2",
      "Name": "Dima",
      "score": "40"
    },
    {
      "ID": "3",
      "Name": "Sasha",
      "score": "30"
    },
    {
      "ID": "1",
      "Name": "Ivan",
      "score": "20"
    },
    {
      "ID": "19",
      "Name": "G.Astral",
      "score": "20"
    },
    {
      "ID": "15",
      "Name": "Test",
      "score": "15"
    },
    {
      "ID": "16",
      "Name": "Test 2",
      "score": "15"
    },
    {
      "ID": "4",
      "Name": "Jojo",
      "score": "10"
    },
    {
      "ID": "18",
      "Name": "G.Astral",
      "score": "6"
    },
    {
      "ID": "17",
      "Name": "sss",
      "score": "2"
    }
  ]
arr.sort((a,b)=>{
    return a-b
})
  for(let i = 0;i<arr.length-1;i++){
    for(let j = i+1;j<arr.length;j++)
    {
      if(arr[i].Name==arr[j].Name){
        arr.splice(j)
      }
    }
  }
console.log(arr);