---
title: TypeAdapter
description: Validate non-model types with TypeAdapter
---

## TypeAdapter Basics

Use `TypeAdapter` to validate types outside of a BaseModel:

```python
from pydantic import TypeAdapter

# Validate a simple type
int_adapter = TypeAdapter(int)
int_adapter.validate_python("42")  # 42

# Validate a complex type
list_adapter = TypeAdapter(list[int])
list_adapter.validate_python([1, 2, 3])
```

## JSON Validation

```python
adapter = TypeAdapter(list[dict[str, int]])
data = adapter.validate_json('[{"a": 1, "b": 2}]')
```

## Nested Types

```python
from typing import TypedDict

class Stock(TypedDict):
    symbol: str
    price: float

adapter = TypeAdapter(list[Stock])
stocks = adapter.validate_python([
    {"symbol": "AAPL", "price": 150.0}
])
```

## Serialization

```python
adapter = TypeAdapter(list[int])
adapter.dump_python([1, 2, 3])
adapter.dump_json([1, 2, 3])
```
