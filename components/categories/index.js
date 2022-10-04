import React, { useEffect, useState } from 'react'

const Categories = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
      setDomLoaded(true);
    }, [])
  return (
    <>
    {domLoaded && (
    <div>
       
    {/* fod item web view */}
    <section className="food-items-bg  d-none d-lg-block webfoodTab-view">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <ul className="nav nav-tabs foodtabs" id="foodTab" role="tablist">
                            <li className="nav-item ">
                                <a className="nav-link active" id="" data-toggle="tab" href="#pally" role="tab" aria-controls="pally" aria-selected="true">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="recommended-tab" data-toggle="tab" href="#recommended" role="tab" aria-controls="recommended" aria-selected="false">Pally</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="pre-orders-tab" data-toggle="tab" href="#pre-orders" role="tab" aria-controls="pre-orders" aria-selected="false">Recommended</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <form className="form-inline select-bg float-right">
                            <div className="form-group mb-0">
                                <select className="form-control border-right-0">
                                    <option>Categories</option>
                                    <option>Soup & stew ingredients</option>
                                    <option>Foodstuffs</option>
                                    <option>Meat, Poultry & Seafood</option>
                                </select>
                            </div>
                            <div className="form-group mb-0">
                                <select className="form-control  border-right-0">
                                    <option>Sub Categories</option>
                                    <option>Grains</option>
                                    <option>Tubers & Roots
                                    </option>
                                </select>
                            </div>
                            <div className="form-group mb-0">
                                <select className="form-control">
                                    <option>Sort By: Price (Low to High)</option>
                                    <option>Price (Low to High)</option>
                                    <option>Price (High to Low)</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
                <hr className="border-bottom" />
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="tab-content main" id="foodTabContent">
                            {/* <div className="tab-pane fade show active " id="pally" role="tabpanel" aria-labelledby="pally-tab">
                                <h6 className="inner-head">16 Available Deals</h6>
                                <div className="">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner ">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="product_detail.html">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className=" product-img mb-3" src="/images/Product-img1.jpg" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Titus 20kg (Full Carton) </h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | <span className="clr-gr">In Season</span></a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                            SLOT</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner ">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img2.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Croaker Fish (Full Carton) </h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                            SLOT</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img3.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">White Onions (40kg)</h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                            SLOT</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img4.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Guinea Corn Red (Paint... </h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">Buy
                                                            slot</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img5.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Soya Beans (Paint Bucket) </h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                            SLOT</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img6.png" alt="Product-img1" />
                                                    </a>
                                                </div>
                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2 ">Soya Beans (100kg) </h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                            SLOT</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img7.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Tuwo Rice (50kg)</h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                            SLOT</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img8.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Beans Oloyin - original (100kg) </h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">Buy
                                                            Slot</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img9.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Irish Potato (5kg) </h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                            SLOT</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img10.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Ofada Rice (50kg) </h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                            SLOT</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img11.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Sombo Pepper - Grade(...</h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">BUY
                                                            SLOT</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img12.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Plantain Big Unripe (Stem of </h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 <small>per
                                                            slot (slot size per person goes here)</small></h5>
                                                    <h6 className="mb-2">Time left: 68:50:52</h6>
                                                    <ul className="list-unstyled pallylist-bg mb-2">
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img2" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img3.jpg" alt="list-img3" />
                                                        </li>
                                                        <li className="d-inline-block pally-left">
                                                            <img className="list-img" src="/images/list-img1.jpg" alt="list-img1" />
                                                        </li>
                                                        <li className="d-inline-block">
                                                            <small>2 slots left</small>
                                                        </li>
                                                    </ul>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects pally-slot-btn">Buy
                                                            Slot</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="tab-pane fade recommended-bg" id="recommended" role="tabpanel" aria-labelledby="recommended-tab">
                                <h6 className="inner-head mb-3 mt-3">16 Available Deals</h6>
                                <div className="">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner ">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img5.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Irish Potato (5kg) </h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | <span className="clr-red">Off Season</span></a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="no-ratings"><p>No ratings yet</p></div>
                                                         {/* <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>  */}
                                                        <div className='success-box'>
                                                            <div className='text-message'></div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img6.png" alt="Product-img6" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Soya Beans (100kg)</h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>
                                                        <div className='success-box'>
                                                            <div className='text-message'></div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img3.png" alt="Product-img1" />
                                                    </a>
                                                </div>
                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">White Onions (40kg)</h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="no-ratings"><p>No ratings yet</p></div>
                                                        {/* <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>  */}
                                                        <div className='success-box'>
                                                            <div className='text-message'></div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img4.png" alt="Product-img1" />
                                                    </a>
                                                </div>
                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Guinea Corn Red (Paint... </h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>
                                                        <div className='success-box'>
                                                            <div className='text-message'>(4.5/5.0)</div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img5.png" alt="Product-img1" />
                                                    </a>
                                                </div>
                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Soya Beans (Paint Bucket) </h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget '>
                                                        <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>
                                                        <div className='success-box'>
                                                            <div className='text-message'>(4.5/5.0)</div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img6.png" alt="Product-img1" />
                                                    </a>
                                                </div>
                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2 ">Soya Beans (100kg) </h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>
                                                        <div className='success-box'>
                                                            <div className='text-message'>(4.5/5.0)</div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img7.png" alt="Product-img1" />
                                                    </a>
                                                </div>
                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Tuwo Rice (50kg)</h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>
                                                        <div className='success-box'>
                                                            <div className='text-message'>(4.5/5.0)</div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img8.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Beans Oloyin - original (100kg) </h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>
                                                        <div className='success-box'>
                                                            <div className='text-message'>(4.5/5.0)</div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img9.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Irish Potato (5kg) </h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>
                                                        <div className='success-box'>
                                                            <div className='text-message'>(4.5/5.0)</div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img10.png" alt="Product-img1" />
                                                    </a>
                                                </div>
                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Ofada Rice (50kg) </h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>
                                                        <div className='success-box'>
                                                            <div className='text-message'>(4.5/5.0)</div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img11.png" alt="Product-img1" />
                                                    </a>
                                                </div>
                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Sombo Pepper - Grade(...</h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>
                                                        <div className='success-box'>
                                                            <div className='text-message'>(4.5/5.0)</div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Product-img12.png" alt="Product-img1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Plantain Big Unripe (Stem of </h5>
                                                    </a>
                                                    <a href="#" className="green-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>3% | In Season</a>
                                                    <h5 className="mb-2 mt-2 font-weight-bold simhead">₦73,000
                                                        <s>(₦78,000)</s>
                                                    </h5>
                                                    <section className='rating-widget'>
                                                        <div className="rating-main pro-detail-star" data-vote="0">
                                                            <div className="mainstar hidden">
                                                                <span className="full" data-value="0"></span>
                                                                <span className="half" data-value="0"></span>
                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="1"></span>
                                                                <span className="half" data-value="0.5"></span>
                                                                <span className="selected"></span>

                                                            </div>
                                                            <div className="star">
                                                                <span className="full" data-value="2"></span>
                                                                <span className="half" data-value="1.5"></span>
                                                                <span className="selected"></span>

                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="3"></span>
                                                                <span className="half" data-value="2.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="4"></span>
                                                                <span className="half" data-value="3.5"></span>
                                                                <span className="selected"></span>
                                                            </div>

                                                            <div className="star">
                                                                <span className="full" data-value="5"></span>
                                                                <span className="half" data-value="4.5"></span>
                                                                <span className="selected"></span>
                                                            </div>
                                                        </div>
                                                        <div className='success-box'>
                                                            <div className='text-message'>(4.5/5.0)</div>
                                                        </div>
                                                    </section>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">SELECT ORDER
                                                            TYPE</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="tab-pane fade preorder-bg" id="pre-orders" role="tabpanel" aria-labelledby="pre-orders-tab">
                                <h6 className="inner-head mb-3 mt-3">3 Available Deals</h6>
                                <div className="">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Pre-order1.png" alt="Pre-order1" />
                                                    </a>
                                                </div>

                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Strawberries</h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h6 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 per kg</h6>
                                                    <p className="text-red mb-2">1kg of 50kg left</p>
                                                    <div className="preorder-progress stat-bar mb-2">
                                                        <span className="stat-bar-rating" role="stat-bar" style="width: 80%;">80%</span>
                                                    </div>
                                                    <p className="mb-2 dgrey-clr">Delivery Date: July 23rd 2021</p>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects " data-toggle="modal" data-target="#preorderModal">Book
                                                            Now</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Pre-order2.png" alt="Pre-order2" />
                                                    </a>
                                                </div>
                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Strawberries</h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h6 className="mb-2 mt-2 font-weight-bold simhead">₦7,500 per kg</h6>
                                                    <p className="text-red mb-2">1kg of 50kg left</p>
                                                    <div className="preorder-progress stat-bar mb-2">
                                                        <span className="stat-bar-rating" role="stat-bar" style="width: 30%;">30%</span>
                                                    </div>
                                                    <p className="mb-2 dgrey-clr">Delivery Date: July 23rd 2021</p>
                                                    <a href="#">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">Book
                                                            Now</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-3 ">
                                            <div className="pally-inner">
                                                <div className="products-img-wrapper  mb-3 pointer">
                                                    <a href="#">
                                                        <div className="heart-icon">
                                                            <span className="material-icons">
                                                                favorite_border
                                                            </span>
                                                        </div>
                                                        <img className="mb-3 product-img" src="/images/Pre-order3.png" alt="Product-img3" />
                                                    </a>
                                                </div>
                                                <div className="pally-content">
                                                    <a href="#" className="inner-head">
                                                        <h5 className="mb-2">Strawberries</h5>
                                                    </a>
                                                    <a href="#" className="red-bg"><span className="material-icons-outlined">
                                                            arrow_right_alt
                                                        </span>9% | In Season</a>
                                                    <h6 className="mb-2 mt-2
                                                     font-weight-bold simhead">₦7,500 per kg</h6>
                                                    <p className="text-red mb-2 text-uppercase">Closed</p>
                                                    <div className="preorder-progress stat-bar mb-2">
                                                        <span className="stat-bar-rating" role="stat-bar" style="width: 100%;">100%</span>
                                                    </div>
                                                    <p className="mb-2 dgrey-clr">Delivery Date: July 23rd 2021</p>
                                                    <a href="#" className="closed-opacity">
                                                        <button type="button" className="brown-btn  text-uppercase btn-effects ">Book
                                                            Now</button>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className="load-bg text-center mb-5 d-none d-lg-block">
                            <a href="#">
                                <button typ="button" className="load-more text-uppercase ">
                                    Load more items
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
    </section>

    {/* food items we view section strat */}
    
    </div>

    
    
    
    )}
    </>
  )
}

export default Categories