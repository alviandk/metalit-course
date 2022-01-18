import React from "react";
import image1 from "../../assets/images/courses/4by3/08.jpg"
import image2 from "../../assets/images/courses/4by3/10.jpg"
import Navig from "../../components/Navbar";
import Footer from "../../components/Footer";

const Cart = () => {
  return (
  	<div>
  		<Navig/>
		<main>
			<section class="py-3">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="bg-light p-4 text-center rounded-3">
								<h1 class="m-0">My cart</h1>

								<div class="d-flex justify-content-center">
									<nav aria-label="breadcrumb">
										<ol class="breadcrumb breadcrumb-dots mb-0">
											<li class="breadcrumb-item"><a href="#">Home</a></li>
											<li class="breadcrumb-item"><a href="#">Courses</a></li>
											<li class="breadcrumb-item active" aria-current="page">Cart</li>
										</ol>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="pt-5">
				<div class="container">
				
					<div class="row g-4 g-sm-5">
						<div class="col-lg-8 mb-4 mb-sm-0">
							<div class="card card-body p-4 shadow">

								<div class="alert alert-danger alert-dismissible d-flex justify-content-between align-items-center fade show py-3 pe-2" role="alert">
									<div>
										<span class="fs-5 me-1">🔥</span>
										These courses are at a limited discount, please checkout within
										<strong class="text-danger ms-1">2 days and 18 hours</strong>
									</div>
									<button type="button" class="btn btn-link mb-0 text-end" 
										data-bs-dismiss="alert" 
										aria-label="Close">
										<i class="bi bi-x-lg text-dark"></i>
									</button>
								</div>

								<div class="table-responsive border-0 rounded-3">
									<table class="table align-middle p-4 mb-0">
										<tbody class="border-top-0">
											<tr>
												<td>
													<div class="d-lg-flex align-items-center">
														<div class="w-100px w-md-80px mb-2 mb-md-0">
															<img src={image1}
																class="rounded" 
																alt=""
															/>
														</div>

														<h6 class="mb-0 ms-lg-3 mt-2 mt-lg-0">	
															<a href="#">Building Scalable APIs with GraphQL</a>
														</h6>
													</div>
												</td>

												<td>
													<h5 class="text-success mb-0">$350</h5>
												</td>

												<td>
													<a href="#" 
														class="btn btn-sm btn-success-soft px-2 me-1 mb-1 mb-md-0">
														<i class="far fa-fw fa-edit"></i>
													</a>
													<button class="btn btn-sm btn-danger-soft px-2 mb-0">
														<i class="fas fa-fw fa-times"></i>
													</button>
												</td>
											</tr>

											<tr>
												<td>
													<div class="d-lg-flex align-items-center">
														<div class="w-100px w-md-80px mb-2 mb-md-0">
															<img src={image2}
																class="rounded"
																alt=""
															/>
														</div>

														<h6 class="mb-0 ms-lg-3 mt-2 mt-lg-0">	
															<a href="#">Bootstrap 5 From Scratch</a>
														</h6>
													</div>
												</td>

												<td>
													<h5 class="text-success mb-0">$150</h5>
												</td>

												<td>
													<a href="#" 
														class="btn btn-sm btn-success-soft px-2 me-1 mb-1 mb-md-0">
														<i class="far fa-fw fa-edit"></i>
													</a>
													<button class="btn btn-sm btn-danger-soft px-2 mb-0">
														<i class="fas fa-fw fa-times"></i>
													</button>
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div class="row g-3 mt-2">
									<div class="col-md-6">
										<div class="input-group">
											<input class="form-control form-control" 
												placeholder="COUPON CODE"
											/>
											<button type="button" 
												class="btn btn-primary">Apply coupon
											</button>
										</div>
									</div>

									<div class="col-md-6 text-md-end">
										<button class="btn btn-primary mb-0" disabled>
											Update cart
										</button>
									</div>
								</div>	
							</div>
						</div>

						<div class="col-lg-4">
							<div class="card card-body p-4 shadow">
								<h4 class="mb-3">Cart Total</h4>

								<ul class="list-group list-group-borderless mb-2">
									<li class="list-group-item px-0 d-flex justify-content-between">
										<span class="h6 fw-light mb-0">
											Original Price
										</span>
										<span class="h6 fw-light mb-0 fw-bold">
											$500
										</span>
									</li>
									<li class="list-group-item px-0 d-flex justify-content-between">
										<span class="h6 fw-light mb-0">
											Coupon Discount
										</span>
										<span class="text-danger">
											-$20
										</span>
									</li>
									<li class="list-group-item px-0 d-flex justify-content-between">
										<span class="h5 mb-0">
											Total
										</span>
										<span class="h5 mb-0">
											$480
										</span>
									</li>
								</ul>

								<div class="d-grid">
									<a href="checkout.html" 
										class="btn btn-lg btn-success">
										Proceed to Checkout
									</a>
								</div>

								<p class="small mb-0 mt-2 text-center">
									By completing your purchase, you agree to these 
									<a href="#">
										<strong>Terms of Service</strong>
									</a>
								</p>

							</div>

						</div>

					</div>
				</div>
			</section>

		</main>
		<Footer/>
	</div>
  );
};

export default Cart;