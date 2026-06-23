---
title: JSON Schema
description: Generate JSON Schema from Pydantic models
---

## Generate JSON Schema

```python
from pydantic import BaseModel

class Product(BaseModel):
    name: str
    price: float
    tags: list[str] = []

schema = Product.model_json_schema()
print(schema)
# {
#     "title": "Product",
#     "type": "object",
#     "properties": {
#         "name": {"title": "Name", "type": "string"},
#         "price": {"title": "Price", "type": "number"},
#         "tags": {"title": "Tags", "type": "array", "items": {"type": "string"}}
#     },
#     "required": ["name", "price"]
# }
```

## Custom Schema

```python
from pydantic import Field

class Item(BaseModel):
    name: str = Field(json_schema_extra={"example": "Widget"})
    secret: str = Field(json_schema_extra={"writeOnly": True})
```

## Schema Options

```python
# Generate with $defs for recursive models
Product.model_json_schema(ref_template="/schemas/{model}.json")

# Schema with by_alias
Product.model_json_schema(by_alias=True)
```
