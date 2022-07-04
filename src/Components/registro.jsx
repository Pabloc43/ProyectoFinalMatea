import React from 'react'

export default function Registro() {
  return (
    <section class="ftco-section">
    <div class="container text-light">
        <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-5">
                <h2 class="heading-section mt-5">Carrito</h2>
            </div>
        </div>
        <div class="row ">
            <div class="col-md-12">
                <h4 class="text-center mb-4 ">Registros de compras</h4>
                <div class=" table-responsive">
                    <table class="table table-dark table-hover">
                    <thead class="thead-primary">
                      <tr>
                        <th>TLD</th>
                        <th>Duration</th>
                        <th>Registration</th>
                        <th>Renewal</th>
                        <th>Transfer</th>
                        <th>Register</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" class="scope" >.com</th>
                        <td>1 Year</td>
                        <td>$70.00</td>
                        <td>$5.00</td>
                        <td>$5.00</td>
                        <td><a href="#" class="btn btn-primary">Sign Up</a></td>
                      </tr>
                      <tr>
                        <th scope="row" class="scope" >.net</th>
                        <td>1 Year</td>
                        <td>$75.00</td>
                        <td>$5.00</td>
                        <td>$5.00</td>
                        <td><a href="#" class="btn btn-primary">Sign Up</a></td>
                      </tr>
                      <tr>
                        <th scope="row" class="scope" >.org</th>
                        <td>1 Year</td>
                        <td>$65.00</td>
                        <td>$5.00</td>
                        <td>$5.00</td>
                        <td><a href="#" class="btn btn-primary">Sign Up</a></td>
                      </tr>
                      <tr>
                        <th scope="row" class="scope" >.biz</th>
                        <td>1 Year</td>
                        <td>$60.00</td>
                        <td>$5.00</td>
                        <td>$5.00</td>
                        <td><a href="#" class="btn btn-primary">Sign Up</a></td>
                      </tr>
                      <tr>
                        <th scope="row" class="scope" >.info</th>
                        <td>1 Year</td>
                        <td>$50.00</td>
                        <td>$5.00</td>
                        <td>$5.00</td>
                        <td><a href="#" class="btn btn-primary">Sign Up</a></td>
                      </tr>
                      <tr>
                        <th scope="row" class="scope border-bottom-0">.me</th>
                        <td class="border-bottom-0">1 Year</td>
                        <td class="border-bottom-0">$45.00</td>
                        <td class="border-bottom-0">$5.00</td>
                        <td class="border-bottom-0">$5.00</td>
                        <td class="border-bottom-0"><a href="#" class="btn btn-primary">Sign Up</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
