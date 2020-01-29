import styled from 'styled-components';

const StyledProductTile = styled.div`
    .product-tile {
        &__pdp-link {
            text-decoration: none;
            font-size: 16px;
            line-height: 19px;
        }

        &__price {
            font-size: 18px;
            line-height: 27px;

            .list-price {
                margin-right: 16px;
                color: #999;
                text-decoration: line-through;
            }
    
            .sale-price {
                font-weight: 700;
            }
        }

        &__color-swatches {
            .swatch {
                width: 28px;
                height: 28px;
                margin-right: 5px;
                border: 1px solid rgba(0,0,0,.3);
                border-radius: 50%;
            }
        }

        &__body {
            padding-top: 10px;
        }
    }
`
export default StyledProductTile;
