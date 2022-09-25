document.getElementById('btn-deposit').addEventListener('click', function () {

    const deposite = document.getElementById('deposite-field');

    const newValue = deposite.value;

    const dnewValue = parseFloat(newValue);


    // console.log(newValue);

    const pastdeposite_field = document.getElementById('total-deposit');

    const pastValue = pastdeposite_field.innerText;

    const dpastValue = parseFloat(pastValue);

    const currentValue = dnewValue + dpastValue;

    pastdeposite_field.innerText = currentValue;

    deposite.value = '';


    // total-balance 

    const balanceElement = document.getElementById('presentbalance');

    const pbalance = balanceElement.innerText;

    const pastbalance = parseFloat(pbalance);

    const currentbalance = pastbalance + currentValue;

    balanceElement.innerText = currentbalance;











})

