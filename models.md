---
title: Models
description: Define and configure Pydantic models with BaseModel
---

## BaseModel

Every Pydantic model inherits from `BaseModel`:

```python
from pydantic import BaseModel

class Product(BaseModel):
    id: int
    name: str
    price: float
    in_stock: bool = True
```

## Nested Models

Models can contain other models:

```python
class Address(BaseModel):
    street: str
    city: str
    zip: str

class Customer(BaseModel):
    name: str
    address: Address
```

## Model Methods

```python
# Convert to dict
product.model_dump()

# Convert to JSON
product.model_dump_json(indent=2)

# Create from dict
Product.model_validate({"id": 1, "name": "Widget", "price": 9.99})

# Create from JSON
Product.model_validate_json('{"id": 1, "name": "Widget", "price": 9.99}')

# Copy with modifications
product.model_copy(update={"price": 7.99})
```

## Immutability

Make fields read-only after initialization:

```python
from pydantic import ConfigDict

class ImmutableModel(BaseModel):
    model_config = ConfigDict(frozen=True)
    name: str
```
