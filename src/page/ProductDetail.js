import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedItem);

  useEffect(() => {
    dispatch(productAction.getProductDetail(id));
  }, [id, dispatch]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="product-img">
          <img className="image" src={product.img} alt={product.title} />
        </Col>
        <Col xs={12} md={6}>
          <h2>{product.title}</h2>
          <h4 style={{ marginTop: "20px" }}>₩{product.price}</h4>
          <div>
            {product.choice && <div className="choice">Conscious choice</div>}
          </div>
          <Dropdown>
            <Dropdown.Toggle
              className="drop-down"
              variant="success"
              id="dropdown-basic"
            >
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product.size.map((size, index) => (
                <Dropdown.Item key={index}>{size}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <div className="d-grid gap-2">
            <Button id="lg-button" variant="primary" size="lg">
              제품 추가
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
