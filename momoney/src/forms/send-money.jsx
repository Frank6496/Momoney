import React from 'react';
import './../App.css';

function Transfer() {


  return (
    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Mobile No</label>
            <input type="tel" class="form-control" id="exampleInputMobileNo" placeholder="Mobile no e.g 0713..."/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Amount to Transfer</label>
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

export default Transfer;