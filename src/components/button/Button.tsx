import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'error';
    color?: 'black' | 'sand' | 'red' | 'orange';
    size?: 'xl' | 'lg' | 'md' | 'sm';
    target?: '_self' | '_blank';
    loading?: Boolean;
    fullWidth?: Boolean;
}

const Box = styled.button<ButtonProps>`
    @import 'theme/breakpoints.scss';
    @import 'theme/palette.scss';
    @import 'theme/typography.scss';
    @import 'theme/_tokens.scss';

    display: inline-block;
    border: none;
    border-radius: $border-radius-regular;
    transition-property: background-color, color, box-shadow;
    transition-delay: 0s;
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &.variant {
        &-primary {
            color: $modest-white;

            &:hover {
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
                color: $modest-white-08;
            }

            &:active {
                box-shadow: none;
                color: $modest-white;
            }

            &[disabled] {
                cursor: default;
                background-color: $stylish-black-03;

                &:hover {
                    box-shadow: none;
                    color: $modest-white;
                }
            }
        }
    }

    &.color {
        &-black {
            background-color: $stylish-black;
        }

        &-sand {
            background-color: $desert-sand;
        }

        &-red {
            background-color: $screaming-coral;
        }

        &-orange {
            background-color: $pumpkin;

            &[disabled] {
                background-color: $pumpkin-2;
            }
        }
    }

    &.size {
        &-xl {
            @include button-20;
            padding: 14px 24px 13px;
            min-height: 55px;

            @include mediaFrom($sm) {
                @include button-24;
                padding: 18px 24px 17px;
            }
        }

        &-lg {
            @include button-16;
            padding: 15px 24px 13px;
            min-height: 50px;
        }

        &-md {
            @include h10-body;
            padding: 10px 24px;
            min-height: 40px;
        }

        &-sm {
            @include h10-body;
            padding: 6px 24px;
        }
    }

    &.fullWidth {
        width: 100%;
        display: block;
    }
`;

export const Button = React.memo(
    ({
        children,
        loading,
        target,
        ...props
    }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => (
        <Box {...props} target={target} data-cmp="Button">
            {loading ? 'loading..' : children}
        </Box>
    ),
);
