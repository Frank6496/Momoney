import React from 'react';
import './../App.css';

function Deposit() {


  return (
    <form>
        <div class="form-group">
            <label for="exampleInputPassword1">Amount to deposit</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Amount in Kshs"/>
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Agreed to our terms and conditions</label>
        </div>
        <button type="submit" class="btn btn-primary">Deposit Funds</button>
    </form>
  )
}

export default Deposit;