import React from "react";
import icon from '../../assets/images/courses/4by3/01.jpg';
import Detail from "../Detail";

const CourseList = () => {
  return (
  	<main>
		<section class="bg-dark align-items-center d-flex pattern">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<h1 class="text-white">Course List Minimal</h1>
						<div class="d-flex">
							<nav aria-label="breadcrumb">
								<ol class="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
									<li class="breadcrumb-item"><a href="#">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Courses</li>
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="pt-5">
			<div class="container">
				<div class="row g-4 justify-content-center">
					<div class="col-lg-10 col-xxl-6">
						<div class="card rounded overflow-hidden shadow">
							<div class="row g-0">

								<div class="col-md-4">
									<img src={icon} alt="card image"/>
								</div>

								<div class="col-md-8">
									<div class="card-body">
										<div class="d-flex justify-content-between mb-2">
											<h5 class="card-title mb-0">
												<a href="/course-detail">
													The Complete Digital Marketing Course - 12 Courses in 1
												</a>
											</h5>
											<a href="#"><i class="fas fa-heart text-danger"></i></a>
										</div>
										<ul class="list-inline mb-1">
											<li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
												<i class="far fa-clock text-danger me-2"></i>6h 56m
											</li>
											<li class="list-inline-item h6 fw-light mb-1 mb-sm-0">
												<i class="fas fa-table text-orange me-2"></i>82 lectures
											</li>
											<li class="list-inline-item h6 fw-light">
												<i class="fas fa-signal text-success me-2"></i>Beginner
											</li>
										</ul>

										<ul class="list-inline mb-0">
											<li class="list-inline-item me-0 small">
												<i class="fas fa-star text-warning"></i>
											</li>
											<li class="list-inline-item me-0 small">
												<i class="fas fa-star text-warning"></i>
											</li>
											<li class="list-inline-item me-0 small">
												<i class="fas fa-star text-warning"></i>
											</li>
											<li class="list-inline-item me-0 small">
												<i class="fas fa-star text-warning"></i>
											</li>
											<li class="list-inline-item me-0 small">
												<i class="fas fa-star-half-alt text-warning"></i>
											</li>
											<li class="list-inline-item ms-2 h6 fw-light">4.5/5.0</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>



				<div class="col-12">
					<nav class="mt-4 d-flex justify-content-center" aria-label="navigation">
						<ul class="pagination pagination-primary-soft rounded mb-0">
							<li class="page-item mb-0">
								<a class="page-link" href="#" tabindex="-1">
									<i class="fas fa-angle-double-left"></i>
								</a>
							</li>
							<li class="page-item mb-0"><a class="page-link" href="#">1</a></li>
							<li class="page-item mb-0 active"><a class="page-link" href="#">2</a></li>
							<li class="page-item mb-0"><a class="page-link" href="#">..</a></li>
							<li class="page-item mb-0"><a class="page-link" href="#">6</a></li>
							<li class="page-item mb-0">
								<a class="page-link" href="#">
									<i class="fas fa-angle-double-right"></i>
								</a>
							</li>
						</ul>
					</nav>
				</div>

			</div>
		</section>
	</main>
    );
  };

export default CourseList;