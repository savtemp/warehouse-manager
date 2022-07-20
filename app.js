const packages = [{
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Harrington',
    trackingNumber: '1324kjs',
    missing: false,
},
{
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',
    trackingNumber: '1325sdk',
    missing: false,
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',
    trackingNumber: 'jffd147',
    missing: false,
},
{
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',
    trackingNumber: 'acdc145',
    missing: false,
},
{
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany',
    trackingNumber: 'abs4321',
    missing: false,
},
{
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Zach',
    trackingNumber: '8081baz',
    missing: false,
},
{
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Jeremy',
    trackingNumber: 'suz2367',
    missing: false,
}
]

function missingPackage(){
    let missingPackage = packages[Math.floor(Math.random()* packages.length)]
    console.log('missing', missingPackage);
    missingPackage.missing = true
}
missingPackage()


let currentPackages = packages

function drawPackages(){
    let template = ''
    currentPackages.forEach(p => template += `<div class="col-12 btn btn-primary" onclick="select('${p.to}')">${p.to}</div>`)
    let packageElm = document.getElementById('packages')
    // console.log(packageElm, template);
    packageElm.innerHTML = template
}
drawPackages()


function select(to){
    let selected = packages.find(p => p.to == to)
    if(selected.missing == true){
        window.alert('found missing package')
    } else {
        window.alert('This is not the missing package')
    }
}

// NOTE removing this because we compiled them in the function at the bottom 
// These buttons filter things out - hit the button and filter out that thing 

// function filterHeavy(){
//     let missing = packages.find(p => p.missing == true)
//     currentPackages = currentPackages.filter(p => p.heavy == missing.heavy);
//     // console.log('missing, heavy package', currentPackages);
//     drawPackages()
// }

// function filterPriority(){
//     let missing = packages.find(p => p.missing == true)
//     currentPackages = currentPackages.filter(p => p.priority == missing.priority);
//     drawPackages()
// }

// function filterFragile(){
//     let missing = packages.find(p => p.missing == true)
//     currentPackages = currentPackages.filter(p => p.fragile == missing.fragile)
//     drawPackages()
// }

// NOTE put all the individual functions for filtering together 
function filterProperty(property){
    let missing = packages.find(p => p.missing == true)
    currentPackages = currentPackages.filter(p => p[property] == missing[property])
    drawPackages()
}
