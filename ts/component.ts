let test = document.querySelector("ul")
let testUl = document.getElementById("ultest")



export function PrayComponent(fadjr: string, shurooq: string, dhuhr: string, asr: string, magrib: string, isha: string, date: string) 
{

    // div element
    let card = document.createElement("div"), 
    headerCard = document.createElement("div"), 
    bodyCard = document.createElement("div"), 
    ul = document.createElement("ul")

    // add bootstrap
    card.classList.add("card")
    headerCard.classList.add("card-header", "px-3", "mt-3")
    bodyCard.classList.add("card-body")
    ul.classList.add("list-group", "list-group-light", "list-group-small")


    // Dviv with color pray time
    let f = document.createElement("div")
    f.classList.add("text-success")
    f.append(document.createTextNode(fadjr))
    
    let s = document.createElement("div")
    s.classList.add("text-success")
    s.append(document.createTextNode(shurooq))

    let d = document.createElement("div")
    d.classList.add("text-success")
    d.append(document.createTextNode(dhuhr))

    let a = document.createElement("div")
    a.classList.add("text-success")
    a.append(document.createTextNode(asr))

    let m = document.createElement("div")
    m.classList.add("text-success")
    m.append(document.createTextNode(magrib))

    let i = document.createElement("div")
    i.classList.add("text-success")
    i.append(document.createTextNode(isha))

    let PrayDate = document.createElement("span")
    PrayDate.classList.add("text-success")
    PrayDate.append(document.createTextNode(date))

    // Pray elements
    let liFadjr =  document.createElement("li")
    liFadjr.append(document.createTextNode("Fadjr :"), f)
    liFadjr.classList.add("list-group-item", "px-3", "d-flex", "justify-content-between")
    
    let liShurooq =  document.createElement("li")
    liShurooq.append(document.createTextNode("Shurooq :"), s)
    liShurooq.classList.add("list-group-item", "px-3", "d-flex", "justify-content-between")

    let liDhuhr =  document.createElement("li")
    liDhuhr.append(document.createTextNode("Dhuhr :"), d)
    liDhuhr.classList.add("list-group-item", "px-3", "d-flex", "justify-content-between")

    let liMagrib =  document.createElement("li")
    liMagrib.append(document.createTextNode("Asr :"), a)
    liMagrib.classList.add("list-group-item", "px-3", "d-flex", "justify-content-between")

    let liAsr =  document.createElement("li")
    liAsr.append(document.createTextNode("Magrib :"), m)
    liAsr.classList.add("list-group-item", "px-3", "d-flex", "justify-content-between")

    let liIsha =  document.createElement("li")
    liIsha.append(document.createTextNode("Isha :"), i)
    liIsha.classList.add("list-group-item", "px-3", "d-flex", "justify-content-between")

    // header

    headerCard.append(document.createTextNode("For : "), PrayDate)

    // add li to ul

    ul.append(liFadjr, liShurooq, liDhuhr, liAsr, liMagrib, liIsha)

    // add ul to card body

    bodyCard.append(ul)

    // add all to card 

    card.append(headerCard, bodyCard)


    // to show it on html page
    testUl.append(card)
}


// PrayComponent("00H00", "00H00",  "00H00", "00H00", "00H00", "00H00", "12-04-2001")