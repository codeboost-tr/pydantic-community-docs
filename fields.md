---
title: Fields
description: Field definitions with constraints, defaults, and metadata
---

## Basic Fields

```python
from pydantic import BaseModel, Field

class Item(BaseModel):
    name: str = Field(min_length=3, max_length=100)
    price: float = Field(gt=0, le=10000)
    quantity: int = Field(default=0, ge=0)
```

## Field Constraints

```python
class Product(BaseModel):
    code: str = Field(pattern=r"^PROD-\d{4}$")
    rating: float = Field(ge=0.0, le=5.0)
    tags: list[str] = Field(min_length=1, max_length=10)
    metadata: dict = Field(default_factory=dict)
```

## Field Metadata

```python
class User(BaseModel):
    name: str = Field(title="Full Name", description="The user's full name")
    age: int = Field(ge=0, le=150, examples=[25, 30])
    email: str = Field(frozen=True)  # cannot be modified after init
```

## Default Factories

```python
from uuid import uuid4
from datetime import datetime

class Order(BaseModel):
    id: str = Field(default_factory=lambda: uuid4().hex)
    created_at: datetime = Field(default_factory=datetime.now)
```

## Deprecated Fields

```python
class Config(BaseModel):
    old_field: str = Field(deprecated="Use new_field instead")
    new_field: str = ""
```
