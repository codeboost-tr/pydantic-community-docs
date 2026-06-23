---
title: Validators
description: Custom validation with field_validator and model_validator
---

## Field Validators

Use `@field_validator` to validate individual fields:

```python
from pydantic import BaseModel, field_validator

class User(BaseModel):
    name: str
    password: str

    @field_validator("password")
    @classmethod
    def password_strength(cls, v: str) -> str:
        if len(v) < 8:
            raise ValueError("Password must be at least 8 characters")
        if not any(c.isdigit() for c in v):
            raise ValueError("Password must contain a number")
        return v
```

## Multiple Fields

```python
@field_validator("name", "email")
@classmethod
def check_not_empty(cls, v: str) -> str:
    if not v.strip():
        raise ValueError("Must not be empty")
    return v
```

## Before and After Validators

```python
@field_validator("price", mode="before")
@classmethod
def convert_price(cls, v):
    if isinstance(v, str):
        return float(v.replace("$", ""))
    return v
```

## Model Validators

Validate across multiple fields:

```python
from pydantic import model_validator

class Order(BaseModel):
    items: list[str]
    coupon: str | None = None

    @model_validator(mode="after")
    def check_coupon(self):
        if self.coupon and len(self.items) < 3:
            raise ValueError("Coupon requires at least 3 items")
        return self
```
