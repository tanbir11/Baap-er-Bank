






document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdraw_field = document.getElementById("withdraw-field");

    const withdraw_value = withdraw_field.value;
    const new_withdraw_value = parseFloat(withdraw_value);
    // console.log(new_withdraw_value);



    const past__withdraw = document.getElementById("present_withdraw");


    const past_2_withdraw = past__withdraw.innerText;
    // console.log(past_2_withdraw);

    const past_2_withdraw_1 = parseFloat(past_2_withdraw);

    // console.log(past_2_withdraw_1);

    // const current_withdraw = new_withdraw_value + past_2_withdraw_1;

    // // console.log(current_withdraw);

    // past__withdraw.innerText = current_withdraw;
    withdraw_field.value = "";
    // balance---------------


    const before_balance_100 = document.getElementById("presentbalance");
    const before_balance_1 = before_balance_100.innerText;

    // console.log(before_balance_1);

    const before_balance_2 = parseFloat(before_balance_1);

    if (new_withdraw_value > before_balance_2) {
        alert("Boss apner account ee taka nai.")
    }
    // console.log(before_balance_1);
    else {
        const current_withdraw = new_withdraw_value + past_2_withdraw_1;

        // console.log(current_withdraw);

        past__withdraw.innerText = current_withdraw;
        New_balance_10 = before_balance_2 - new_withdraw_value;
        before_balance_100.innerText = New_balance_10;
    }













})