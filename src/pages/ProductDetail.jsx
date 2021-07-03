import React, {useEffect, useState} from 'react';
import {Button, Card} from "semantic-ui-react";
import {useParams} from 'react-router-dom'
import ProductService from "../services/productService";

function ProductDetail() {

    const {name} = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {

        let productService = new ProductService()
        productService.getByProductName(name).then(result => setProduct(result.data.data));
    },[name])


    return (
        <div>
            <Card fluid>
                <Card.Content>
                    <Card.Header>{product.productName}</Card.Header>
                    <Card.Meta>{product.unitPrice}</Card.Meta>
                    <Card.Description>
                        <strong>{product.quantityPerUnit}</strong>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className="ui two buttons">
                        <Button basic color="green">
                            Sepete Ekle
                        </Button>
                        <Button basic color="blue">
                            Favorilere Ekle
                        </Button>
                    </div>
                </Card.Content>
            </Card>

        </div>
    );
}

export default ProductDetail;
