FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
COPY ./src/TodoApi/ .
EXPOSE 5000
ENTRYPOINT ["dotnet", "TodoApi.dll"]
