
let getExchangeRate=async ()=>{
 let currCode1=document.querySelector("#fromD").value.toLowerCase();
 let currCode2=document.querySelector("#toD").value.toLowerCase();
 const base_url=`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currCode1}/${currCode2}.json`
 let  response =await fetch(base_url) 
 let data=await response.json()

 return data[currCode2];

}
const dropdown=document.querySelectorAll(".countryCurrencyCode")
const butn=document.querySelector("button")

dropdown.forEach((dropdown)=>{
    for(countryCurrencyCode in countryList){
        let newOption=document.createElement("option");
        newOption.value=countryCurrencyCode;
        newOption.innerText=countryCurrencyCode;
        dropdown.appendChild(newOption);
    }
  
 })
document.querySelector("#fromD").addEventListener("change",()=>{
        let currCode=document.querySelector("#fromD").value;
        let counCode=countryList[currCode]
       
        document.querySelector("#fromFImg").src=`https://flagsapi.com/${counCode}/flat/64.png`
})
document.querySelector("#toD").addEventListener("change",()=>{
    let currCode=document.querySelector("#toD").value;
    let counCode=countryList[currCode]
    
    document.querySelector("#toFImg").src=`https://flagsapi.com/${counCode}/flat/64.png`
})
butn.addEventListener("click",async ()=>{
          let final_result=document.querySelector("#er")
          let input=document.querySelector("#ai")
          let currCode1=document.querySelector("#fromD").value;
          let currCode2=document.querySelector("#toD").value;
          
          let data= await getExchangeRate()
          let exchangeRate=data*input.value;
          final_result.innerText=`${input.value} ${currCode1} = ${exchangeRate} ${currCode2}`
})

  
