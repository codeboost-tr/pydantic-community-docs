---
title: Introduction
description: What is Pydantic and how it brings runtime validation to Python type hints
---

Pydantic is the most widely used data validation library for Python. It provides runtime validation of data using Python type annotations, ensuring that the data your code receives matches the expected types and constraints.

## What is Pydantic?

Pydantic enforces type hints at runtime and provides user-friendly errors when data is invalid. It's the foundation for FastAPI, LangChain, SQLModel, and thousands of other Python projects.

## Key Features

- Runtime type validation via Python type annotations
- JSON schema generation for any model
- Serialization and deserialization
- Strict mode and data coercion
- Custom validators and model configurations
- Support for complex generics and recursive models

## Version

This documentation covers Pydantic v2, the current major version with significant improvements over v1, including rewritten core validation engine in Rust (pydantic-core).
