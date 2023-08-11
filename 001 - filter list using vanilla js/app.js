const collection = document.querySelector(".collection")
const hiddenCollection = document.querySelector(".hidden-collection")

let fullnameslist = data.map((name) => (`${name.first_name} ${name.last_name}`))
fullnameslist.sort()

function loadThePageWithAllContacts() {
    collection.innerHTML = ""
    hiddenCollection.innerHTML = ""

    for (let i = 65; i <= 90; i++) {

        let collectionHeader = createCollectionHeader(String.fromCharCode(i), "display-none")
        hiddenCollection.appendChild(collectionHeader)

        collectionHeader = createCollectionHeader(String.fromCharCode(i), "display-inherit")
        collection.appendChild(collectionHeader)

        let contactsdataForSpecificLetter = createCollectionItems(String.fromCharCode(i), "display-none")
        hiddenCollection.appendChild(contactsdataForSpecificLetter)

        contactsdataForSpecificLetter = createCollectionItems(String.fromCharCode(i), "display-inherit")
        collection.appendChild(contactsdataForSpecificLetter)

    }
    console.log("loaded all contacts")
}

function createCollectionHeader(charRecived, displayClass) {

    const collectionHeader = document.createElement("div")
    collectionHeader.classList.add("collection-header")
    collectionHeader.classList.add(displayClass)
    collectionHeader.setAttribute("id", `id${charRecived}`)
    collectionHeader.appendChild(document.createElement("h5"))
    collectionHeader.firstChild.textContent = `${charRecived}`
    return collectionHeader

}

function createCollectionItems(charRecived, displayClass) {

    const contactsdataForSpecificLetter = document.createElement("div")
    contactsdataForSpecificLetter.classList.add("contacts-data-for-specific-letter")
    const collectionIteams = getDataForSpecifiedLetter(charRecived, displayClass)
    contactsdataForSpecificLetter.appendChild(collectionIteams)
    return contactsdataForSpecificLetter

}

function getDataForSpecifiedLetter(specifiedLetter, displayClass) {
    const collection = document.createElement("div")
    collection.setAttribute("id", `${specifiedLetter}-contacts`)
    for (let name of fullnameslist) {
        if (name[0] === specifiedLetter) {
            const collectionItem = document.createElement("div")
            collectionItem.classList.add("collection-item")
            collectionItem.classList.add(displayClass)
            collectionItem.textContent = name
            collection.appendChild(collectionItem)
        }
    }
    return collection
}

document.addEventListener("DOMContentLoaded", loadThePageWithAllContacts);

const filterContacts = document.querySelector("#filter-contacts")

filterContacts.addEventListener("input", RefershPageAfterFiltering);

function RefershPageAfterFiltering(keyBoardEvent) {
    keyBoardEvent.target.value = keyBoardEvent.target.value.replace(/[^a-zA-Z]/g, '');
    const inputValue = keyBoardEvent.target.value.toUpperCase()
    if (inputValue === "") {
        loadThePageWithAllContacts()
    }
    else {
        loadThePageWithFilterdContacts(inputValue)
    }
}

function loadThePageWithFilterdContacts(inputValue) {
    collection.innerHTML = ""
    hiddenCollection.innerHTML = ""

    for (let i = 65; i <= 90; i++) {

        let collectionHeader = startsWithFilterCollectionHeader(String.fromCharCode(i), inputValue)
        hiddenCollection.appendChild(document.createElement("h1"))
        hiddenCollection.firstChild.textContent = `Starts with ${inputValue}`
        hiddenCollection.appendChild(collectionHeader)

        let contactsdataForSpecificLetter = startsWithFilterCollectionItems(String.fromCharCode(i), inputValue)
        hiddenCollection.lastChild.appendChild(contactsdataForSpecificLetter)
        const listOfContactsContainer = hiddenCollection.querySelector(`#${String.fromCharCode(i)}-id`)
        if (listOfContactsContainer !== null) {
            const listOfContacts = listOfContactsContainer.firstChild.children
            if (listOfContacts.length === 0) {
                hiddenCollection.lastChild.innerHTML = "<h2 style='color:red'>NONE</h2>"
            }
        }
        else {
            hiddenCollection.lastChild.remove()
        }

        collectionHeader = createCollectionHeader(String.fromCharCode(i), "display-inherit")
        collection.appendChild(document.createElement("h1"))
        collection.firstChild.textContent = `Contains ${inputValue}`
        collection.appendChild(collectionHeader)

        contactsdataForSpecificLetter = createCollectionItems(String.fromCharCode(i), "display-inherit")
        collection.appendChild(contactsdataForSpecificLetter)
    }
    console.log("loaded Filtered contacts")
    removeCollectionItems(inputValue)
}

function startsWithFilterCollectionHeader(charRecived, inputValue) {

    if (
        inputValue[0] === charRecived.toUpperCase()
    ) {
        const collectionHeader = document.createElement("div")
        collectionHeader.classList.add("collection-header")
        collectionHeader.appendChild(document.createElement("h5"))
        collectionHeader.firstChild.textContent = `${charRecived}`
        return collectionHeader
    }
    return document.createElement("div")
}

function startsWithFilterCollectionItems(charRecived, inputValue) {
    if (
        inputValue[0] === charRecived.toUpperCase()
    ) {

        const contactsdataForSpecificLetter = document.createElement("div")
        contactsdataForSpecificLetter.classList.add("contacts-data-for-specific-letter")
        contactsdataForSpecificLetter.setAttribute("id", `${charRecived}-id`)
        const collectionIteams = startsWithFilteredDataForSpecifiedLetter(charRecived, inputValue)
        contactsdataForSpecificLetter.appendChild(collectionIteams)
        return contactsdataForSpecificLetter
    }
    return document.createElement("div")
}

function startsWithFilteredDataForSpecifiedLetter(specifiedLetter, inputValue) {
    const collection = document.createElement("div")
    for (let name of fullnameslist) {
        if (
            name[0] === specifiedLetter
            &&
            name.toUpperCase().indexOf(inputValue) === 0
        ) {
            const collectionItem = document.createElement("div")
            collectionItem.classList.add("collection-item")
            collectionItem.textContent = name
            collection.appendChild(collectionItem)
        }
    }
    return collection
}

function removeCollectionItems(inputValue) {
    const collectionitems = document.getElementsByClassName("collection-item display-inherit")
    for (let item of collectionitems) {
        if (item.textContent.toUpperCase().indexOf(inputValue) <= -1) {
            item.classList.add("deleteContact")
        }
    }
    document.querySelectorAll('.deleteContact').forEach(e => e.remove());
    for (let i = 65; i <= 90; i++) {
        let contactslist = document.querySelector(`#${String.fromCharCode(i)}-contacts`)
        if (contactslist.children.length === 0) {
            document.querySelector(`#id${String.fromCharCode(i)}`).remove()
        }
    }
}

