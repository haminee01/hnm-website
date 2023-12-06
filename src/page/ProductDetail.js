import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/haminee01/hnm-website/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img className="image" src={product?.img} />
        </Col>
        <Col>
          <h4>{product?.title}</h4>
          <h4>₩{product?.price}</h4>
          <div>
            {product && product.choice === true ? (
              <div className="choice">Conscious choice</div>
            ) : (
              ""
            )}
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
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
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
