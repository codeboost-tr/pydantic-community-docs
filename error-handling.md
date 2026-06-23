---
title: Error Handling
description: Understanding and customizing Pydantic validation errors
---

## ValidationError

When validation fails, Pydantic raises `ValidationError`:

```python
from pydantic import BaseModel, ValidationError

class User(BaseModel):
    name: str
    age: int

try:
    User(name="Alice", age="not_a_number")
except ValidationError as e:
    print(e.errors())
    # [{"type": "int_parsing", "loc": ["age"],
    #   "msg": "Input should be a valid integer",
    #   "input": "not_a_number"}]
```

## Error Structure

```json
[
  {
    "type": "string_pattern_mismatch",
    "loc": ["code"],
    "msg": "String should match pattern '^[A-Z]+$'",
    "input": "abc123",
    "ctx": {"pattern": "^[A-Z]+$"}
  }
]
```

## Custom Error Messages

```python
class Product(BaseModel):
    name: str = Field(min_length=1, error="Product name is required")
    price: float = Field(gt=0, error="Price must be positive")
```

## Multiple Errors

Pydantic collects all validation errors before raising, unlike standard Python exceptions:

```python
try:
    User(name=123, age="invalid")
except ValidationError as e:
    print(len(e.errors()))  # 2 errors collected
```
