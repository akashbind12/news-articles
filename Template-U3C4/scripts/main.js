async function apiCall(url) {
    //add api call logic here
    
    try{

        let res = await fetch(url);
        let data = await res.json();
        return data;

    }catch(err){
        console.log("err:",err);
    }
}

// author: null
// content: "Life Insurance Corporation of India's initial public offering (IPO) is expected to file its Draft Red Herring Prospectus (DRHP) on February 11, sources told CNBC-TV18.\r\nIt has learned that the Insura… [+914 chars]"
// description: "LIC IPO: The quantum of divestment and EV numbers will be mentioned in the DRHP."
// publishedAt: "2022-02-11T01:27:00Z"
// source: {id: null, name: 'Moneycontrol'}
// title: "LIC Public Issue | Filing with SEBI likely today, IRDAI clears draft papers - Moneycontrol.com"
// url: "https://www.moneycontrol.com/news/business/ipo/lic-ipo-filing-with-sebi-likely-on-february-11-irdai-clears-draft-papers-8070891.html"
// urlToImage: 
function appendArticles(articles, main) {
    //add append logic here

  articles.forEach((el) => {
     console.log(el)

    let div = document.createElement("div");
    div.id = "card";
    div.onclick = function(el){
        localStorage.setItem("article" , JSON.stringify(el));
        window.location.href = "news.html";
    }
  
    let div1 = document.createElement("div")
    div1.id = "smallcard1";
   
    let p1 =  document.createElement("p")
    p1.innerText = el.content ;
 
    div1.append(p1)
 
    let div2 = document.createElement("div")
    div2.id = "smallcard2";
    let p2 =  document.createElement("p")
    p2.innerText = el.description ;
 
    div2.append(p2)
 
    let div3 = document.createElement("div")
    div3.id = "smallcard3";
    let img =  document.createElement("img")
    img.src = el.urlToImage;
    
    div3.append(img)
 
    div.append(div1,div2,div3)
 
    main.append(div);

  });

}

export { apiCall, appendArticles };



