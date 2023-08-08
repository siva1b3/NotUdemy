const collection = document.querySelector(".collection")

const fullnameslist = data.map((name) => (`${name.first_name} ${name.last_name}`))
console.log(fullnameslist)


for (let i = 65; i <= 90; i++) {

    const collectionHeader = document.createElement("div")
    collectionHeader.classList.add("collection-header")
    collectionHeader.appendChild(document.createElement("h5"))
    collectionHeader.firstChild.textContent = `${String.fromCharCode(i)}`
    collection.appendChild(collectionHeader)

    const contactsdataForSpecificLetter = document.createElement("div")
    contactsdataForSpecificLetter.classList.add("contacts-data-for-specific-letter")
    const collectionIteams = getDataForSpecifiedLetter(String.fromCharCode(i))
    getDataForSpecifiedLetter(String.fromCharCode(i))
    contactsdataForSpecificLetter.appendChild(collectionIteams)
    collection.appendChild(contactsdataForSpecificLetter)

    // console.log(String.fromCharCode(i));
}


function getDataForSpecifiedLetter(specifiedLetter) {
    const collection = document.createElement("div")
    for (let name of fullnameslist) {
        if (name[0] === specifiedLetter) {
            const collectionItem = document.createElement("div")
            collectionItem.classList.add("collection-item")
            collectionItem.textContent = name
            collection.appendChild(collectionItem)
        }
    }
    return collection
}