---
title: Custom Types
description: Create custom field types, constrained types, and new type definitions
---

## Constrained Types

```python
from pydantic import BaseModel
from pydantic.types import (
    PositiveInt, NegativeInt, NonNegativeInt,
    PositiveFloat, NonNegativeFloat,
    ConstrainedStr, ConstrainedInt,
)

class Inventory(BaseModel):
    quantity: PositiveInt
    temperature: NonNegativeFloat
    code: str = Field(min_length=5, max_length=20)
```

## Type Aliases

```python
from typing import Annotated
from pydantic import Field

HexColor = Annotated[str, Field(pattern=r"^#[0-9a-fA-F]{6}$")]
PhoneNumber = Annotated[str, Field(pattern=r"^\+?1?\d{10}$")]

class Contact(BaseModel):
    color: HexColor
    phone: PhoneNumber
```

## Custom Types

```python
from pydantic import GetCoreSchemaHandler
from pydantic_core import CoreSchema, core_schema

class Sku(str):
    @classmethod
    def __get_pydantic_core_schema__(
        cls, handler: GetCoreSchemaHandler
    ) -> CoreSchema:
        return core_schema.with_default_schema(
            core_schema.str_schema(pattern=r"^SKU-\d{4}$")
        )

class Product(BaseModel):
    sku: Sku
```
