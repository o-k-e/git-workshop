// Task: Show the cat names that contains the given keyword. (It can be case sensitive).

// Execute: node search-by-name.js Cir

// Example: node searcg-by-name.js irm
//  it will outputs:
//    Cirmi
//    Cirmos



const catNames = ['Cirmi', 'Cirmos', 'Vakarcs', 'Butyok', 'Bubu']

function main(keyword) {
    console.log('keyword:', keyword)
    const searchResult = []
    // Tip: string.prototype.includes()
    for(const pet of catNames){
        if(pet.includes(keyword)){
            searchResult.push(pet)
        }
    }
    console.log(searchResult)
}

main(process.argv[2])

