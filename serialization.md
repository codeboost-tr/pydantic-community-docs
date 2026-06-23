---
title: Serialization
description: Convert Pydantic models to dict, JSON, and custom formats
---

## model_dump

Convert a model to a Python dictionary:

```python
user = User(name="Alice", age=30)
data = user.model_dump()
# {"name": "Alice", "age": 30}

# Exclude specific fields
user.model_dump(exclude={"password"})

# Include only specific fields
user.model_dump(include={"name", "email"})

# Serialize with by_alias
user.model_dump(by_alias=True)
```

## model_dump_json

Serialize to JSON string:

```python
json_str = user.model_dump_json(indent=2)

# Custom serialization
user.model_dump_json(exclude_none=True, round_trip=True)
```

## Custom Serialization

```python
from pydantic import field_serializer

class Product(BaseModel):
    price: Decimal

    @field_serializer("price")
    def serialize_price(self, value: Decimal) -> str:
        return f"${value:.2f}"
```

## Serialization Context

Pass context to serializers:

```python
user.model_dump(context={"include_secret": False})
```
