import React from "react";
import Poster from "../../assets/images/videos/poster.jpg";
import Video1 from "../../assets/images/videos/360p.mp4";
import Video2 from "../../assets/images/videos/720p.mp4";
import Video3 from "../../assets/images/videos/1080p.mp4";
import Caption1 from "../../assets/images/videos/en.vtt"
import Caption2 from "../../assets/images/videos/fr.vtt"

const VideoPlayer = () => {
  return (
	<main>
		<section class="py-0 bg-dark position-relative">
			<div class="row g-0">
				<div class="d-flex">
					<div class="overflow-hidden fullscreen-video w-100">
						<div class="video-player rounded-3">
							<video controls crossorigin="anonymous" playsinline poster={Poster}>
								<source src={Video1} type="video/mp4" size="360"/>
								<source src={Video2} type="video/mp4" size="720"/>
								<source src={Video3} type="video/mp4" size="1080"/>
								<track kind="captions" label="English" srclang="en" src={Caption1} default />
								<track kind="captions" label="French" srclang="fr" src={Caption2} />
							</video>
						</div>
					</div>

					<div class="justify-content-end position-relative">
						<button class="navbar-toggler btn btn-white mt-4 plyr-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
							<span class="navbar-toggler-animation">
								<span></span>
								<span></span>
								<span></span>
							</span>	
						</button>

						<div class="collapse collapse-horizontal" id="collapseWidthExample">
							<div class="card vh-100 overflow-auto rounded-0 w-280px w-sm-400px">
								<div class="card-header bg-light rounded-0">
									<h1 class="mt-2 fs-5">The Complete Digital Marketing Course - 12 Courses in 1</h1>
									<h6 class="mb-0 fw-normal"><a href="/">By Jacqueline Miller</a></h6>
								</div>

								<div class="card-body">
									<h5>Course content</h5>
									<hr/>
										<div class="row">
											<div class="col-12">

												<div class="accordion accordion-flush-light accordion-flush" id="accordionExample">
													<div class="accordion-item">
														<h2 class="accordion-header" id="headingOne">
															<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
																<span class="mb-0 fw-bold">Introduction of Digital Marketing</span> 
															</button>
														</h2>
														<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
															<div class="accordion-body px-3">
																<div class="vstack gap-3">

																	<div class="d-flex justify-content-between align-items-center">
																		<div class="position-relative d-flex align-items-center">
																			<a href="/" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
																				<i class="fas fa-play me-0"></i>
																			</a>
																			<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Introduction</span>
																		</div>
																		<p class="mb-0 text-truncate">2m 10s</p>
																	</div>
																	<div class="d-flex justify-content-between align-items-center">
																		<div class="position-relative d-flex align-items-center">
																			<a href="/" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
																				<i class="fas fa-play me-0"></i>
																			</a>
																			<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px"> What is Digital Marketing What is Digital Marketing</span>
																		</div>
																		<p class="mb-0 text-truncate">15m 10s</p>
																	</div>

																	<div class="d-flex justify-content-between align-items-center">
																		<div class="position-relative d-flex align-items-center">
																			<a href="/" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
																				<i class="fas fa-play me-0"></i>
																			</a>
																			<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Type of Digital Marketing</span>
																		</div>
																		<p class="mb-0 text-truncate">18m 10s</p>
																	</div>
																</div>
															</div>
														</div>
													</div>

													<div class="accordion-item">
														<h2 class="accordion-header" id="headingFour">
															<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
																<span class="mb-0 fw-bold">YouTube Marketing</span> 
															</button>
														</h2>
														<div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
															<div class="accordion-body px-3">
																<div class="vstack gap-3">
				
																	<div class="d-flex justify-content-between align-items-center">
																		<div class="position-relative d-flex align-items-center">
																			<a href="/" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
																				<i class="fas fa-play me-0"></i>
																			</a>
																			<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Video Flow</span>
																		</div>
																		<p class="mb-0 text-truncate">25m 5s</p>
																	</div>

												
																	<div class="d-flex justify-content-between align-items-center">
																		<div class="position-relative d-flex align-items-center">
																			<a href="/" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
																				<i class="fas fa-play me-0"></i>
																			</a>
																			<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Webmaster Tool</span>
																		</div>
																		<p class="mb-0 text-truncate">15m 20s</p>
																	</div>

																	<div class="d-flex justify-content-between align-items-center">
																		<div class="position-relative d-flex align-items-center">
																			<a href="/" class="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
																				<i class="fas fa-play me-0"></i>
																			</a>
																			<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Featured Contents on Channel</span>
																		</div>
																		<p class="mb-0 text-truncate">32m 20s</p>
																	</div>

													
																	<div class="d-flex justify-content-between align-items-center">
																		<div class="position-relative d-flex align-items-center">
																			<a href="/" class="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
																				<i class="bi bi-lock-fill"></i>
																			</a>
																			<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Managing Comments</span>
																		</div>
																		<p class="mb-0 text-truncate">20m 20s</p>
																	</div>

																	<div class="d-flex justify-content-between align-items-center">
																		<div class="position-relative d-flex align-items-center">
																			<a href="/" class="btn btn-light btn-round btn-sm mb-0 stretched-link position-static">
																				<i class="bi bi-lock-fill"></i>
																			</a>
																			<span class="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-100px w-sm-200px">Channel Analytics</span>
																		</div>
																		<p class="mb-0 text-truncate">18m 20s</p>
																	</div>
																</div>
															</div>
														</div>
													</div>

												</div>
											</div>
										</div>
								</div>

								<div class="card-footer">
									<div class="d-grid">
										<a href="/course-detail" class="btn btn-primary-soft mb-0">Back to course</a>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>

		</section>
	</main>
    );
  };

export default VideoPlayer;